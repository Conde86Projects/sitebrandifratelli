'use client'

import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Users, MessageCircle, Mail, Target } from 'lucide-react'

interface AnalyticsData {
  chatOpens: number
  conversions: number
  conversionRate: number
  totalVisitors: number
  leadsBySegment: {
    advocacia: number
    licitacoes: number
    brandilabs: number
    sistemas: number
    home: number
  }
  deviceStats: {
    mobile: number
    desktop: number
  }
  conversionFunnel: {
    visitors: number
    chatOpened: number
    messagesSent: number
    contactProvided: number
    conversionsCompleted: number
  }
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData>({
    chatOpens: 0,
    conversions: 0,
    conversionRate: 0,
    totalVisitors: 0,
    leadsBySegment: {
      advocacia: 0,
      licitacoes: 0,
      brandilabs: 0,
      sistemas: 0,
      home: 0
    },
    deviceStats: {
      mobile: 0,
      desktop: 0
    },
    conversionFunnel: {
      visitors: 0,
      chatOpened: 0,
      messagesSent: 0,
      contactProvided: 0,
      conversionsCompleted: 0
    }
  })
  // Estado para dados reais do Google Analytics - sem loading
  const [analyticsData, setAnalyticsData] = useState({
    visitors: 0,
    conversions: 0,
    conversionRate: 0,
    loading: false, // Iniciar sem loading
    error: null
  })

  // Remover useEffect desnecessário - dados já inicializados

  const segmentData = [
    { name: 'Advocacia', value: data.leadsBySegment.advocacia, color: COLORS[0] },
    { name: 'Licitações', value: data.leadsBySegment.licitacoes, color: COLORS[1] },
    { name: 'Brandi Labs', value: data.leadsBySegment.brandilabs, color: COLORS[2] },
    { name: 'Sistemas', value: data.leadsBySegment.sistemas, color: COLORS[3] }
  ]

  const funnelData = [
    { name: 'Visitantes', value: data.conversionFunnel.visitors },
    { name: 'Chat Aberto', value: data.conversionFunnel.chatOpened },
    { name: 'Mensagens', value: data.conversionFunnel.messagesSent },
    { name: 'Contato', value: data.conversionFunnel.contactProvided },
    { name: 'Conversões', value: data.conversionFunnel.conversionsCompleted }
  ]

  const calculateConversionRate = (current: number, previous: number) => {
    return ((current / previous) * 100).toFixed(1)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📊 Analytics do Chat - Brandi Fratelli
          </h1>
          <p className="text-gray-600">
            Métricas de conversão e performance do sistema de chat inteligente
          </p>
        </div>

        {/* Cards de Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Visitantes Únicos</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.visitors.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Dados do Google Analytics</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Chat Aberto</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">
                  Aguardando dados reais
                </p>
              </div>
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversões</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.conversions}</p>
                <p className="text-sm text-gray-500">
                  Leads capturados
                </p>
              </div>
              <Target className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
                <p className="text-3xl font-bold text-gray-900">{analyticsData.conversionRate.toFixed(1)}%</p>
                <p className="text-sm text-gray-500">Baseado em dados reais</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Funil de Conversão */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              📈 Funil de Conversão
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={funnelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Visitantes → Chat:</span>
                <span className="font-medium">
                  {calculateConversionRate(data.conversionFunnel.chatOpened, data.conversionFunnel.visitors)}%
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Chat → Mensagem:</span>
                <span className="font-medium">
                  {calculateConversionRate(data.conversionFunnel.messagesSent, data.conversionFunnel.chatOpened)}%
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Mensagem → Contato:</span>
                <span className="font-medium">
                  {calculateConversionRate(data.conversionFunnel.contactProvided, data.conversionFunnel.messagesSent)}%
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Contato → Conversão:</span>
                <span className="font-medium">
                  {calculateConversionRate(data.conversionFunnel.conversionsCompleted, data.conversionFunnel.contactProvided)}%
                </span>
              </div>
            </div>
          </div>

          {/* Leads por Segmento */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              🎯 Leads por Segmento
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {segmentData.map((segment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: segment.color }}
                    ></div>
                    <span className="text-sm">{segment.name}</span>
                  </div>
                  <span className="text-sm font-medium">{segment.value} leads</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status dos Dados */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📊 Status dos Dados Analytics
          </h3>
          <div className="space-y-4">
            {analyticsData.error ? (
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-900">❌ Erro</h4>
                <p className="text-red-700 text-sm mt-1">{analyticsData.error}</p>
              </div>
            ) : (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">🔄 Dados Zerados</h4>
                <p className="text-blue-700 text-sm mt-1">
                  Dashboard configurado para mostrar dados reais do Google Analytics. 
                  Atualmente exibindo valores zerados até a integração com a API.
                </p>
              </div>
            )}
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">✅ Google Analytics Ativo</h4>
              <p className="text-green-700 text-sm mt-1">
                ID: G-2YM7M0QGXL está coletando dados. Os dados aparecerão aqui quando a API for conectada.
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-900">🔧 Próximo Passo</h4>
              <p className="text-yellow-700 text-sm mt-1">
                Conectar Google Analytics Reporting API para exibir dados reais de visitantes, conversões e eventos do chat.
              </p>
            </div>
          </div>
        </div>

        {/* Instruções para Configuração */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            🔧 Próximos Passos para Dados Reais
          </h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p><strong>1. Configurar Google Analytics:</strong></p>
            <p className="ml-4">• Substitua 'G-XXXXXXXXXX' no layout.tsx pelo seu ID real do GA4</p>
            <p className="ml-4">• Crie uma propriedade GA4 em analytics.google.com</p>
            
            <p><strong>2. Configurar Goals:</strong></p>
            <p className="ml-4">• Configure eventos personalizados no GA4</p>
            <p className="ml-4">• Defina 'conversion_completed' como conversão</p>
            
            <p><strong>3. Conectar API:</strong></p>
            <p className="ml-4">• Use Google Analytics Reporting API v4</p>
            <p className="ml-4">• Implemente autenticação com Service Account</p>
            
            <p><strong>4. Automatizar Relatórios:</strong></p>
            <p className="ml-4">• Configure refresh automático dos dados</p>
            <p className="ml-4">• Implemente cache para melhor performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}