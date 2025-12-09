"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  Bot,
  Play,
  Pause,
  Square,
  Send,
  Plus,
  Settings,
  Trash2,
  Copy,
  Edit,
  MessageSquare,
  Zap,
  Brain,
  Cpu,
  Sparkles,
  Menu,
  X,
  Search,
  Filter,
  Download,
} from "lucide-react"
import Link from "next/link"
import { Tooltip } from "@/components/ui/tooltip"

export default function AIAgentsPage() {
  const [activeAgent, setActiveAgent] = useState("customer-support")
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "agent",
      content: "Hello! I'm your customer support assistant. How can I help you today?",
    },
    { id: 2, role: "user", content: "I'm having trouble with my account login." },
    {
      id: 3,
      role: "agent",
      content:
        "I'm sorry to hear that. Let me help you troubleshoot this issue. Could you please provide me with your email address associated with the account?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isAgentThinking, setIsAgentThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const agents = [
    {
      id: "customer-support",
      name: "Customer Support",
      description: "Help customers with account issues and product questions",
      icon: MessageSquare,
    },
    {
      id: "data-analyst",
      name: "Data Analyst",
      description: "Analyze data and generate insights",
      icon: BarChart,
    },
    {
      id: "content-writer",
      name: "Content Writer",
      description: "Generate marketing copy and blog posts",
      icon: PenTool,
    },
    {
      id: "code-assistant",
      name: "Code Assistant",
      description: "Help with coding tasks and debugging",
      icon: Code,
    },
    {
      id: "sales-assistant",
      name: "Sales Assistant",
      description: "Qualify leads and schedule meetings",
      icon: Target,
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
    }
    setMessages((prev) => [...prev, newUserMessage])
    setInputValue("")
    setIsAgentThinking(true)

    // Simulate agent response after a delay
    setTimeout(() => {
      const newAgentMessage = {
        id: messages.length + 2,
        role: "agent",
        content:
          "Thanks for your message. I'm analyzing your request and will provide a detailed response shortly. In the meantime, here are some related resources that might help...",
      }
      setMessages((prev) => [...prev, newAgentMessage])
      setIsAgentThinking(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-foreground/20">
          <div className="flex items-center justify-between p-3 md:p-4">
            <div className="flex items-center">
              <Link href="/work-demo/dashboard" className="flex items-center">
                <CustomLogo />
                <span className="ml-2 text-lg md:text-xl font-bold">AI Agents</span>
              </Link>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="hidden sm:flex items-center py-2 px-3 md:px-4 bg-foreground/10 rounded-lg hover:bg-foreground/20 text-sm">
                <Settings size={14} className="mr-1 md:mr-2" />
                Configure
              </button>
              <button className="flex items-center py-2 px-3 md:px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-primary/90 hover:to-accent/90 text-sm">
                <Play size={14} className="mr-1 md:mr-2" />
                <span className="hidden xs:inline">Launch</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Agent Info Bar */}
          <div className="border-b border-foreground/20 p-3 md:p-4 bg-foreground/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-0">
                <div className="bg-primary/10 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base md:text-xl font-bold truncate">
                    Customer Support Assistant
                  </h2>
                  <p className="text-xs md:text-sm text-foreground-secondary truncate">
                    Help customers with account issues and product questions
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 md:space-x-2">
                <button className="p-2 rounded-lg hover:bg-foreground/10">
                  <Play size={16} />
                </button>
                <button className="p-2 rounded-lg hover:bg-foreground/10">
                  <Pause size={16} />
                </button>
                <button className="p-2 rounded-lg hover:bg-foreground/10">
                  <Square size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-6">
              <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-3xl rounded-2xl p-4 md:p-6 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-foreground/10 rounded-tl-none"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        {message.role === "agent" && (
                          <div className="bg-primary/10 p-1 rounded-full mr-2">
                            <Bot size={14} className="text-primary" />
                          </div>
                        )}
                        <span className="font-medium text-sm md:text-base">
                          {message.role === "user" ? "You" : "Customer Support Assistant"}
                        </span>
                      </div>
                      <p className="whitespace-pre-wrap text-sm md:text-base">{message.content}</p>
                    </div>
                  </motion.div>
                ))}

                {isAgentThinking && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-3xl rounded-2xl p-4 md:p-6 bg-foreground/10 rounded-tl-none">
                      <div className="flex items-center mb-2">
                        <div className="bg-primary/10 p-1 rounded-full mr-2">
                          <Bot size={14} className="text-primary" />
                        </div>
                        <span className="font-medium text-sm md:text-base">
                          Customer Support Assistant
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-foreground/20 p-3 md:p-4 bg-background">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-end space-x-3 md:space-x-4">
                  <div className="flex-1 bg-foreground/5 rounded-2xl border border-foreground/20 p-3 md:p-4">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      className="w-full bg-transparent border-none focus:outline-none resize-none max-h-32 text-sm md:text-base"
                      rows={1}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={inputValue.trim() === ""}
                    className="p-3 md:p-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3 md:mt-4">
                  <div className="flex space-x-2">
                    <button className="flex items-center py-2 px-3 bg-foreground/10 rounded-lg text-xs md:text-sm hover:bg-foreground/20">
                      <Sparkles size={14} className="mr-1 md:mr-2" />
                      <span className="hidden xs:inline">Suggest</span>
                    </button>
                    <button className="flex items-center py-2 px-3 bg-foreground/10 rounded-lg text-xs md:text-sm hover:bg-foreground/20">
                      <Zap size={14} className="mr-1 md:mr-2" />
                      <span className="hidden xs:inline">Actions</span>
                    </button>
                  </div>
                  <div className="text-xs md:text-sm text-foreground-secondary hidden sm:block">
                    Press Enter to send, Shift+Enter for new line
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Simple icon components since they're not in lucide-react
function BarChart({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

function PenTool({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}

function Code({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  )
}

function Target({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
