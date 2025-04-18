// src/components/wizard/WizardHeader.tsx
import React from 'react';
import WizardNavigation from './WizardNavigation';

interface WizardHeaderProps {
  title: string;
  subtitle?: string;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onSkip?: () => void;
  canProceed: boolean;
  isProcessing: boolean;
  showSkipButton?: boolean;
  skipButtonDisabled?: boolean;
  onValidatePrevious?: () => Promise<boolean>; // New prop for validation
}

/**
 * Component for rendering the wizard header with title and navigation
 */
const WizardHeader: React.FC<WizardHeaderProps> = ({
  title,
  subtitle,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSkip,
  canProceed,
  isProcessing,
  showSkipButton = false,
  skipButtonDisabled = false,
  onValidatePrevious
}) => {
  return (
    <div className="mb-6">
      <div className='sm:grid sm:grid-cols-2 flex flex-col items-center'>
        <div className='flex flex-col w-full'>
          <h2 className="text-3xl font-bold font-anek-latin">{title}</h2>
          {subtitle && (
            <h3 className="text-lg font-afacad">{subtitle}</h3>
          )}
        </div>
        <div className="sm:flex flex-row gap-2 items-end justify-end flex-grow hidden">
          <WizardNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={onNext}
            onPrevious={onPrevious}
            onSkip={onSkip}
            canProceed={canProceed}
            isProcessing={isProcessing}
            showSkipButton={showSkipButton}
            skipButtonDisabled={skipButtonDisabled}
            onValidatePrevious={onValidatePrevious}
          />
        </div>
      </div>
    </div>
  );
};

export default WizardHeader;