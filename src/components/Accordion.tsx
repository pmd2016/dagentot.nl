'use client';

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

function AccordionItem({ title, description }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

