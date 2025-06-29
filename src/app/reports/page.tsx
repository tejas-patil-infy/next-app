"use client";

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

interface RowData {
    category: string;
    program: string;
    spendingDriver: string;
    total: number;
    dept: string;
    site: string;
    modifiedBy: string;
    updateTimestamp: string;
}

export default function ReportsPage() {
    const [columnDefs] = useState([
        { field: "category", headerName: "Category", flex: 1, sortable: true, filter: true },
        { field: "program", headerName: "Program", flex: 1, sortable: true, filter: true },
        { field: "spendingDriver", headerName: "Spending Driver", flex: 1, sortable: true, filter: true },
        { field: "total", headerName: "Total", flex: 1, sortable: true, filter: "agNumberColumnFilter" },
        { field: "dept", headerName: "Dept", flex: 1, sortable: true, filter: true },
        { field: "site", headerName: "Site", flex: 1, sortable: true, filter: true },
        { field: "modifiedBy", headerName: "Modified By", flex: 1, sortable: true, filter: true },
        { field: "updateTimestamp", headerName: "Update Time Stamp", flex: 1, sortable: true, filter: "agDateColumnFilter" },
    ]);

    const [rowData, setRowData] = useState<RowData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:4000/api/data");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: RowData[] = await response.json();
                setRowData(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Collab Data- Next Js</h1>
                <p className="text-gray-600 mt-1">Manage and analyze your collaborative data</p>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-96">
                    <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="text-gray-600">Loading data...</p>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="ag-theme-alpine" style={{ height: "calc(100vh - 250px)", width: "100%" }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            theme="legacy"
                            defaultColDef={{
                                resizable: true,
                                sortable: true,
                                filter: true,
                            }}
                            animateRows={true}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}
                            pagination={true}
                            paginationPageSize={50}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}