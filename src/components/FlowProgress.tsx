import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DashboardTab, TestPlan } from '../models/types';

interface FlowProgressProps {
  activeTab: DashboardTab;
  testPlan: TestPlan;
  tasksCount: number;
  observationsCount: number;
  findingsCount: number;
}

const STEPS: { id: DashboardTab; label: string; shortLabel: string }[] = [
  { id: 'plan',         label: 'Plan',          shortLabel: 'Plan'  },
  { id: 'script',       label: 'Guion',         shortLabel: 'Guion' },
  { id: 'observations', label: 'Observaciones', shortLabel: 'Obs.'  },
  { id: 'findings',     label: 'Hallazgos',     shortLabel: 'Hall.' },
  { id: 'reports',      label: 'Reportes',      shortLabel: 'Rep.'  },
];

const isStepComplete = (
  stepId: DashboardTab,
  testPlan: TestPlan,
  tasksCount: number,
  observationsCount: number,
  findingsCount: number
): boolean => {
  switch (stepId) {
    case 'plan':         return !!(testPlan.product && testPlan.product.trim().length > 0);
    case 'script':       return tasksCount > 0;
    case 'observations': return observationsCount > 0;
    case 'findings':     return findingsCount > 0;
    case 'reports':      return false;
    default:             return false;
  }
};

export const FlowProgress: React.FC<FlowProgressProps> = ({
  activeTab,
  testPlan,
  tasksCount,
  observationsCount,
  findingsCount,
}) => {
  const currentIndex = STEPS.findIndex(s => s.id === activeTab);

  return (
    <nav
      aria-label="Progreso del flujo de prueba"
      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 mb-6 shadow-sm"
    >
      <ol className="flex items-center justify-center gap-0 max-w-2xl mx-auto">
        {STEPS.map((step, index) => {
          const completed = isStepComplete(step.id, testPlan, tasksCount, observationsCount, findingsCount);
          const isActive  = step.id === activeTab;
          const isPending = !isActive && !completed;

          return (
            <React.Fragment key={step.id}>
              <li className="flex flex-col items-center gap-1 min-w-[56px]">
                <div
                  className={[
                    'flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-all duration-300',
                    completed && !isActive ? 'bg-green-500 text-white shadow-sm' : '',
                    isActive              ? 'bg-navy text-white shadow-md ring-2 ring-navy/20 scale-110' : '',
                    isPending             ? 'bg-slate-100 text-slate-400 border border-slate-200' : '',
                  ].join(' ')}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {completed && !isActive ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <span
                  className={[
                    'text-xs font-medium hidden sm:block transition-colors duration-300',
                    completed && !isActive ? 'text-green-600' : '',
                    isActive              ? 'text-navy font-bold' : '',
                    isPending             ? 'text-slate-400' : '',
                  ].join(' ')}
                >
                  <span className="hidden md:inline">{step.label}</span>
                  <span className="md:hidden">{step.shortLabel}</span>
                </span>
              </li>

              {index < STEPS.length - 1 && (
                <div
                  className={[
                    'flex-1 h-0.5 mx-1 mb-5 rounded-full transition-all duration-500',
                    completed ? 'bg-green-400' : 'bg-slate-200',
                  ].join(' ')}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </ol>

      <p className="text-center text-xs text-slate-400 mt-1" aria-live="polite">
        Paso {currentIndex + 1} de {STEPS.length}:&nbsp;
        <strong className="text-navy">{STEPS[currentIndex]?.label}</strong>
      </p>
    </nav>
  );
};

export default FlowProgress;