import React, { useState } from 'react';
import { 
  Bot, 
  Layers, 
  Boxes, 
  BarChart3, 
  Sparkles, 
  Send, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Package, 
  ArrowUpRight,
  Filter,
  RefreshCw,
  Sliders,
  ShieldCheck,
  CreditCard,
  Cpu
} from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
  extractedData?: Record<string, string>;
}

export const ConceptDemonstrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai-sales' | 'crm' | 'erp' | 'bi' | 'microsaas'>('ai-sales');

  // Interactive state for AI Sales Assistant demo
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'user',
      text: 'Hi, we are a 40-person logistics company looking to automate our dispatch and customer tracking.'
    },
    {
      sender: 'agent',
      text: 'Welcome! NEXOVIRA AI Solution frequently engineers custom logistics dispatch architectures. To recommend the optimal module setup, are your drivers currently utilizing mobile devices for status updates, or is dispatch handled strictly through back-office desktop portals?',
      extractedData: {
        companySize: '40 staff',
        domain: 'Logistics & Dispatch',
        intent: 'Operational Automation'
      }
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Quick prompt options for user to click
  const quickPrompts = [
    'We need a custom CRM integrated with QuickBooks & Stripe.',
    'Can you extract line items from 500+ vendor PDF invoices weekly?',
    'What is the typical development timeline for a focused MVP?'
  ];

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim()) return;
    const newMsg: ChatMessage = { sender: 'user', text: promptText };
    setChatMessages(prev => [...prev, newMsg]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      let extractedData: Record<string, string> | undefined;

      if (promptText.toLowerCase().includes('crm') || promptText.toLowerCase().includes('quickbooks')) {
        reply = 'Understood. We engineer custom CRM and ERP platforms with direct two-way accounting syncs (QuickBooks, Xero) and Stripe payment modules. This removes double data entry and keeps invoices linked directly to customer accounts.';
        extractedData = { module: 'CRM & Accounting Bridge', priority: 'High', sync: 'QuickBooks API' };
      } else if (promptText.toLowerCase().includes('pdf') || promptText.toLowerCase().includes('invoice')) {
        reply = 'We construct custom document intelligence pipelines that parse multi-page PDFs, extract line-item tables with mathematical verification, and post structured records directly into your database.';
        extractedData = { tool: 'Document Extraction', volume: '500+ weekly', target: 'Direct DB Ingestion' };
      } else {
        reply = 'Thank you for providing those details. Following technical scoping, our team can architect a customized prototype and schedule an architectural review with our engineering leads.';
        extractedData = { status: 'Consultation Ready', nextStep: 'Requirement Mapping' };
      }

      setChatMessages(prev => [...prev, {
        sender: 'agent',
        text: reply,
        extractedData
      }]);
      setIsTyping(false);
    }, 700);
  };

  // State for CRM demo
  const [crmFilter, setCrmFilter] = useState<'all' | 'high' | 'closing'>('all');

  // State for BI demo
  const [biPeriod, setBiPeriod] = useState<'30d' | '90d' | 'ytd'>('30d');

  return (
    <section className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
            Interactive Technical Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            What We Can Build
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Explore functional architectural demonstrations showing how NEXOVIRA AI Solution translates operational requirements into responsive digital systems.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-blue-400/90 bg-blue-950/40 border border-blue-800/30 px-3 py-1.5 rounded-md">
            <span className="font-semibold text-white">Concept Demonstration:</span>
            <span>Illustrative prototypes with simulated operational data. Not presented as completed client deliverables.</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800/80 mb-8">
          <button
            onClick={() => setActiveTab('ai-sales')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'ai-sales'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI Sales Assistant</span>
          </button>

          <button
            onClick={() => setActiveTab('crm')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'crm'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Custom CRM Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('erp')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'erp'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>ERP Operations Platform</span>
          </button>

          <button
            onClick={() => setActiveTab('bi')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'bi'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Business Intelligence</span>
          </button>

          <button
            onClick={() => setActiveTab('microsaas')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'microsaas'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Micro-SaaS Product</span>
          </button>
        </div>

        {/* Dynamic Concept Demonstration Display */}
        <div className="bg-[#0b1222] border border-blue-900/30 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Demo Bar */}
          <div className="px-6 py-4 bg-[#080d18] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-slate-700 inline-block" />
              <span className="text-xs font-mono text-slate-400 pl-2">
                demo.preview.nexoviraai.internal/{activeTab}
              </span>
            </div>
            <div className="text-xs text-blue-400 font-medium">
              Interactive Concept Architecture
            </div>
          </div>

          {/* Tab 1: AI Sales Assistant */}
          {activeTab === 'ai-sales' && (
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Chat Column */}
                <div className="lg:col-span-7 flex flex-col h-[520px] bg-[#070b14] border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">NEXOVIRA Inbound Sales Agent</div>
                        <div className="text-xs text-blue-400 font-medium">Autonomous Qualification & Booking Flow</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">Grounding: Active</span>
                  </div>

                  {/* Messages Feed */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {chatMessages.map((msg, idx) => (
                      <div 
                        key={idx} 
                        className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        <div 
                          className={`max-w-[85%] rounded-xl p-3.5 text-sm ${
                            msg.sender === 'user' 
                              ? 'bg-blue-600 text-white rounded-tr-none' 
                              : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                          }`}
                        >
                          <p>{msg.text}</p>
                          
                          {/* Structured Extraction Metadata */}
                          {msg.extractedData && (
                            <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-xs">
                              <div className="font-semibold text-blue-400 mb-1">Extracted Lead Context:</div>
                              <div className="grid grid-cols-2 gap-1 text-slate-400">
                                {Object.entries(msg.extractedData).map(([k, v]) => (
                                  <div key={k} className="flex justify-between gap-2 pr-2">
                                    <span className="capitalize">{k}:</span>
                                    <span className="text-slate-200 font-medium">{v}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 px-1">
                          {msg.sender === 'user' ? 'Visitor' : 'AI Agent (Validated)'}
                        </span>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex items-center gap-2 text-xs text-slate-400 italic py-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                        Agent formulating verified response...
                      </div>
                    )}
                  </div>

                  {/* Quick Prompts */}
                  <div className="px-3 py-2 bg-slate-900/40 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {quickPrompts.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendPrompt(p)}
                        className="text-xs text-left px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition-colors line-clamp-1"
                      >
                        "{p}"
                      </button>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt(chatInput)}
                      placeholder="Type a simulated business inquiry..."
                      className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={() => handleSendPrompt(chatInput)}
                      disabled={!chatInput.trim()}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* System Specs Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Automated Inbound Lead Qualification</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      NEXOVIRA AI Solution engineers sales agents that converse naturally with prospects, qualify requirements against your service criteria, and synchronize qualified meetings directly into your calendar.
                    </p>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enterprise Guardrails</div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-300">
                        <strong className="text-white">Retrieval Grounding:</strong> Agent answers only from approved corporate technical documentation, eliminating unauthorized promises.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-300">
                        <strong className="text-white">CRM Synchronization:</strong> Lead context is parsed into structured parameters and sent directly to your sales pipeline via webhook.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-950/30 border border-blue-900/40 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-blue-300 font-semibold">Simulated Calendar Availability</span>
                      <Calendar className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-xs text-slate-400 mb-3">
                      When qualified, prospects choose a consultation slot without leaving the chat interface.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center text-slate-300">Tomorrow · 10:00 AM</div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center text-slate-300">Tomorrow · 2:30 PM</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Tab 2: Custom CRM Dashboard */}
          {activeTab === 'crm' && (
            <div className="p-6 lg:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Custom Deal Pipeline & Follow-up Tracker</h3>
                  <p className="text-xs text-slate-400">Engineered to eliminate bloated per-seat fees while mirroring your exact sales stages.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Filter by:</span>
                  <button 
                    onClick={() => setCrmFilter('all')}
                    className={`text-xs px-3 py-1.5 rounded ${crmFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                  >
                    All Deals
                  </button>
                  <button 
                    onClick={() => setCrmFilter('high')}
                    className={`text-xs px-3 py-1.5 rounded ${crmFilter === 'high' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                  >
                    High Value (&gt;$20k)
                  </button>
                </div>
              </div>

              {/* Kanban Column View */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                {/* Column 1: Discovery */}
                <div className="bg-[#070b14] p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-slate-300">1. Discovery Stage</span>
                    <span className="text-xs text-slate-400">2 deals</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 hover:border-blue-500/40 transition-colors">
                      <div className="text-xs font-semibold text-white">Midwest Fleet Logistics</div>
                      <div className="text-xs text-slate-400 mt-1">Custom Dispatch & API</div>
                      <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                        <span className="text-blue-400 font-mono font-semibold">$38,000</span>
                        <span className="text-[11px] text-slate-400">Call scheduled</span>
                      </div>
                    </div>
                    {crmFilter === 'all' && (
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                        <div className="text-xs font-semibold text-white">AeroCraft Components</div>
                        <div className="text-xs text-slate-400 mt-1">Inventory Sync Module</div>
                        <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                          <span className="text-blue-400 font-mono font-semibold">$14,500</span>
                          <span className="text-[11px] text-slate-400">Audit notes in review</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Column 2: Scope & Architecture */}
                <div className="bg-[#070b14] p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-slate-300">2. Architecture & Scope</span>
                    <span className="text-xs text-slate-400">1 deal</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 hover:border-blue-500/40 transition-colors">
                      <div className="text-xs font-semibold text-white">Solvix Legal Partners</div>
                      <div className="text-xs text-slate-400 mt-1">Client Collaboration Portal</div>
                      <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                        <span className="text-blue-400 font-mono font-semibold">$27,000</span>
                        <span className="text-[11px] text-emerald-400 font-medium">Specs approved</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Proposal Submitted */}
                <div className="bg-[#070b14] p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-slate-300">3. Proposal Sent</span>
                    <span className="text-xs text-slate-400">2 deals</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 hover:border-blue-500/40 transition-colors">
                      <div className="text-xs font-semibold text-white">OmniRetail Wholesale</div>
                      <div className="text-xs text-slate-400 mt-1">B2B Portal & Multi-Warehouse</div>
                      <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                        <span className="text-blue-400 font-mono font-semibold">$52,000</span>
                        <span className="text-[11px] text-amber-400">Reviewing terms</span>
                      </div>
                    </div>
                    {crmFilter === 'all' && (
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                        <div className="text-xs font-semibold text-white">Nexus Academy Network</div>
                        <div className="text-xs text-slate-400 mt-1">Student Enrollment Engine</div>
                        <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                          <span className="text-blue-400 font-mono font-semibold">$18,000</span>
                          <span className="text-[11px] text-slate-400">Board vote Tuesday</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Column 4: Final Contract */}
                <div className="bg-[#070b14] p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-slate-300">4. Final Contracting</span>
                    <span className="text-xs text-slate-400">1 deal</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-950/40 rounded-lg border border-blue-800/60 hover:border-blue-500 transition-colors">
                      <div className="text-xs font-semibold text-white">Precision Moldings Ltd</div>
                      <div className="text-xs text-slate-400 mt-1">ERP Shop Floor Module</div>
                      <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-blue-900/60">
                        <span className="text-cyan-300 font-mono font-semibold">$44,500</span>
                        <span className="text-[11px] text-emerald-400 font-medium">Agreement sent</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 3: ERP Operations Platform */}
          {activeTab === 'erp' && (
            <div className="p-6 lg:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">ERP Operations & Work Order Orchestration</h3>
                  <p className="text-xs text-slate-400">Unified tracking linking client work orders, warehouse inventory, and invoice reconciliation.</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-400">Active Warehouse: <strong className="text-white">Central Hub (Zone B)</strong></span>
                  <span className="text-emerald-400 font-medium">99.4% Dispatch Accuracy</span>
                </div>
              </div>

              {/* ERP Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Active Work Orders</span>
                    <Package className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">128</div>
                  <div className="text-xs text-emerald-400 mt-1">18 scheduled for dispatch today</div>
                </div>

                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Low Stock Reorder Triggers</span>
                    <Sliders className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-amber-400">4 SKUs</div>
                  <div className="text-xs text-slate-400 mt-1">Automated PO generated to suppliers</div>
                </div>

                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Unbilled Work Hours</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">$42,850</div>
                  <div className="text-xs text-blue-400 mt-1">Ready for automated draft billing</div>
                </div>
              </div>

              {/* Work Order Execution Table */}
              <div className="bg-[#070b14] rounded-xl border border-slate-800 overflow-hidden">
                <div className="px-4 py-3 bg-slate-900/60 border-b border-slate-800 text-xs font-semibold text-slate-300">
                  Real-Time Production & Job Dispatch Queue
                </div>
                <div className="divide-y divide-slate-800/80 text-xs">
                  <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-900/40">
                    <div>
                      <span className="font-mono text-blue-400 font-semibold mr-3">WO-8842</span>
                      <span className="text-white font-medium">Batch Run #42 · Custom Extrusion Assembly</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">Assigned: Machine Group 3</span>
                      <span className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-800/50">In Progress (72%)</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-900/40">
                    <div>
                      <span className="font-mono text-blue-400 font-semibold mr-3">WO-8843</span>
                      <span className="text-white font-medium">Field Service Inspection Kit · Qty 200</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">Assigned: Assembly Bay A</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-300 border border-emerald-800/50">QC Verified</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-900/40">
                    <div>
                      <span className="font-mono text-blue-400 font-semibold mr-3">WO-8844</span>
                      <span className="text-white font-medium">Raw Material Restock · Aluminum Alloy Billets</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">Supplier: Apex Metals</span>
                      <span className="px-2 py-0.5 rounded bg-amber-900/40 text-amber-300 border border-amber-800/50">PO Awaiting Dock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Business Intelligence */}
          {activeTab === 'bi' && (
            <div className="p-6 lg:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Unified Business Intelligence & Reporting Core</h3>
                  <p className="text-xs text-slate-400">Aggregating multiple data stores into cohesive executive dashboards and automated digests.</p>
                </div>
                <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setBiPeriod('30d')}
                    className={`px-3 py-1 text-xs rounded font-medium ${biPeriod === '30d' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Last 30 Days
                  </button>
                  <button
                    onClick={() => setBiPeriod('90d')}
                    className={`px-3 py-1 text-xs rounded font-medium ${biPeriod === '90d' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Last Quarter
                  </button>
                  <button
                    onClick={() => setBiPeriod('ytd')}
                    className={`px-3 py-1 text-xs rounded font-medium ${biPeriod === 'ytd' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Year to Date
                  </button>
                </div>
              </div>

              {/* BI Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Net Processed Revenue</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">
                    {biPeriod === '30d' ? '$184,200' : biPeriod === '90d' ? '$542,800' : '$1,620,000'}
                  </div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1 mt-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+14.8% vs previous period</span>
                  </div>
                </div>

                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Gross Margin</div>
                  <div className="text-2xl font-bold font-mono text-blue-400 mt-1">48.2%</div>
                  <div className="text-xs text-slate-400 mt-2">Target benchmark: 45.0%</div>
                </div>

                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Avg Sales Cycle Time</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">16.4 Days</div>
                  <div className="text-xs text-emerald-400 mt-2">Accelerated by 5.2 days</div>
                </div>

                <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">Automated Report Dispatch</div>
                  <div className="text-2xl font-bold font-mono text-cyan-400 mt-1">Daily 07:00</div>
                  <div className="text-xs text-slate-400 mt-2">Executive Slack & Email Digest</div>
                </div>
              </div>

              {/* Data Pipeline Flow Indicator */}
              <div className="p-4 bg-[#070b14] rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-slate-300 mb-3">Live Automated ETL Ingestion Streams</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Stripe Billing Pipeline</div>
                      <div className="text-slate-400">Syncs every 15 mins</div>
                    </div>
                    <span className="text-emerald-400 font-mono">Synced</span>
                  </div>

                  <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">ERP Inventory DB</div>
                      <div className="text-slate-400">Hourly aggregation</div>
                    </div>
                    <span className="text-emerald-400 font-mono">Synced</span>
                  </div>

                  <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Support Ticket Corpus</div>
                      <div className="text-slate-400">Continuous webhook stream</div>
                    </div>
                    <span className="text-emerald-400 font-mono">Synced</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 5: Micro-SaaS Product */}
          {activeTab === 'microsaas' && (
            <div className="p-6 lg:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Micro-SaaS Multi-Tenant Core Architecture</h3>
                  <p className="text-xs text-slate-400">Turnkey foundation covering authentication, tenant workspaces, Stripe billing, and API throttling.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Workspace:</span>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-white font-mono border border-slate-700">acme-corp.app</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Micro-SaaS Tenant Card */}
                <div className="p-5 bg-[#070b14] rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-semibold text-slate-300">Active Subscription</span>
                    <span className="px-2 py-0.5 rounded text-[11px] bg-blue-900/40 text-blue-300 border border-blue-800">Growth Plan</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Monthly Billing</div>
                    <div className="text-2xl font-bold font-mono text-white mt-0.5">$149 / mo</div>
                    <div className="text-xs text-slate-400 mt-1">Renews in 18 days via Stripe Billing</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-xs space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Team Seats:</span>
                      <span className="text-white font-medium">8 of 15 used</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>API Token Quota:</span>
                      <span className="text-white font-medium">42,500 / 100k requests</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg font-medium transition-colors">
                    Manage Stripe Subscription
                  </button>
                </div>

                {/* API Token Engine */}
                <div className="lg:col-span-2 p-5 bg-[#070b14] rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-semibold text-slate-300">Developer API Keys & Webhook Listeners</span>
                    <span className="text-xs text-emerald-400 font-mono">Rate Limiting Active</span>
                  </div>
                  
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">Production Live Key</div>
                        <div className="font-mono text-slate-400 mt-0.5">sk_live_9a4f••••••••••••••81d0</div>
                      </div>
                      <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded font-mono">Full Scope</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">Staging Sandbox Key</div>
                        <div className="font-mono text-slate-400 mt-0.5">sk_test_1c3e••••••••••••••20b7</div>
                      </div>
                      <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded font-mono">Read Only</span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-950/20 border border-blue-900/30 rounded-lg text-xs text-slate-300">
                    <strong className="text-white">Rapid Time-to-Market:</strong> Launching a Micro-SaaS with NEXOVIRA AI Solution gives you battle-tested authentication, role authorization, billing webhooks, and responsive dashboards, so you can focus 100% on marketing your proprietary solution.
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
