import { v4 as makeUUID } from 'uuid';

const agents = new Map()
const agentInputs = new Map()
const agentStates = new Map()

export const register = agent => input => state => {
  let uuid = makeUUID()
  agents.set(uuid, agent)
  agentInputs.set(uuid, input)
  agentStates.set(uuid, state)
  return uuid
};

export const getAgent = agentId => {
  return agents.get(agentId)
}

export const getAgentInput = agentId => {
  return agentInputs.get(agentId)
}

export const getAgentState = agentId => {
  return agentStates.get(agentId)
}

export const setAgentState = agentId => state => {
  agentStates.set(agentId, state)
}