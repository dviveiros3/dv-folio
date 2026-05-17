# Skill: Agent Frameworks

## Core Concepts
- **Agent**: Autonomous system that perceives and acts
- **Tools**: Functions the agent can call
- **Memory**: Short-term and long-term context
- **Planning**: How the agent decides what to do
- **Observation**: How the agent sees the world

## ReAct Pattern (Reasoning + Acting)
1. Observe current state
2. Think about what to do
3. Take an action
4. Observe result
5. Repeat

## Implementation
```python
class Agent:
    def __init__(self, tools, model):
        self.tools = tools
        self.model = model
        self.memory = []

    def think(self, context):
        return self.model.generate(f"Given {context}, what action should I take?")

    def act(self, action):
        tool_name = action.tool
        result = self.tools[tool_name](action.params)
        return result

    def run(self, task):
        while not task.complete():
            context = self.memory + [task.state]
            action = self.think(context)
            result = self.act(action)
            self.memory.append({"action": action, "result": result})
        return task.result()
```

## Tool Defining Example
```python
def search_web(query):
    """Search the web for information"""
    return web_search_api(query)

def calculate(expression):
    """Evaluate a mathematical expression"""
    return eval(expression)

tools = [search_web, calculate]
```

## Best Practices
- Give agents clear, specific goals
- Limit tool choices to prevent decision paralysis
- Implement memory for context across sessions
- Validate tool outputs before using
- Add timeout and error handling
- Log all actions for debugging

## Popular Frameworks
- LangChain
- AutoGPT
- CrewAI
- LlamaIndex
- Semantic Kernel
