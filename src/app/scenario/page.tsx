"use client";

import React, { useState, useEffect } from "react";
import { Search, Plus, Copy, Trash2, ChevronRight } from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  type: "TSL" | "Forecast";
  status: "Draft" | "Running" | "Completed" | "Failed";
  createdBy: string;
  createdDate: string;
  lastModified: string;
  progress: {
    currentStep: number;
    totalSteps: number;
    stepNames: string[];
  };
}

export default function ScenarioManagerPage() {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const mockScenarios: Scenario[] = [
      {
        id: "1747",
        name: "Test Scenario - TSL",
        type: "TSL",
        status: "Draft",
        createdBy: "Saswat",
        createdDate: "2025-06-20",
        lastModified: "2025-06-22",
        progress: {
          currentStep: 1,
          totalSteps: 6,
          stepNames: ["Input Data", "Constraints", "Objectives", "Run Optimizer", "RCA", "Output & POR"]
        }
      },
      {
        id: "1746",
        name: "Test Scenario - Forecast",
        type: "Forecast",
        status: "Draft",
        createdBy: "Saswat",
        createdDate: "2025-06-19",
        lastModified: "2025-06-21",
        progress: {
          currentStep: 1,
          totalSteps: 6,
          stepNames: ["Input Data", "Constraints", "Objectives", "Run Optimizer", "RCA", "Output & POR"]
        }
      }
    ];

    setTimeout(() => {
      setScenarios(mockScenarios);
      setLoading(false);
    }, 500);
  }, []);

  const filteredScenarios = scenarios.filter(scenario =>
    scenario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scenario.createdBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderScenarioCard = (scenario: Scenario) => {
    return (
      <div className="bg-white rounded-xl shadow border border-gray-200 p-4 mb-6" key={scenario.id}>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <h3 className="text-md font-medium text-gray-900">
              {scenario.name} (#{scenario.id})
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 border text-gray-800">Draft</span>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 border text-gray-800">Type: {scenario.type}</span>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 border text-gray-800">Created By: {scenario.createdBy}</span>
            <button className="text-blue-500 hover:text-blue-700 p-2">
              <Copy className="w-4 h-4" />
            </button>
            <button className="text-red-500 hover:text-red-700 p-2">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="relative mt-8 px-10">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

          <div className="flex items-center justify-between relative z-10">
            {/* <button className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-5 h-5" />
            </button> */}

            <div className="flex-1 flex justify-between items-center">
              {scenario.progress.stepNames.map((stepName, index) => {
                const stepNumber = index + 1;
                const isCurrent = index === scenario.progress.currentStep - 1;

                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-10 h-10 flex items-center justify-center text-sm rounded-full border-2 font-semibold mb-1 bg-white z-10 ${isCurrent ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-500'
                      }`}>
                      {stepNumber}
                    </div>
                    <div className={`text-xs text-center ${isCurrent ? 'text-black font-medium' : 'text-gray-600'
                      }`}>
                      {stepName}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <button className="text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-5 h-5" />
            </button> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-start space-x-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Scenario</span>
        </button>

        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
          <span>Compare Scenario</span>
        </button>
      </div>

      {/* Scenarios List */}
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-600">Loading scenarios...</p>
          </div>
        </div>
      ) : (
        <div>
          {filteredScenarios.map((scenario) => renderScenarioCard(scenario))}

          {filteredScenarios.length === 0 && !loading && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No scenarios found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? "Try adjusting your search terms" : "Get started by creating your first scenario"}
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create New Scenario</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}