"""
Your First Python AI Project!

This file demonstrates the simplest way to communicate with Claude API.
For TypeScript developers: This is similar to making a fetch() API call.
"""

import anthropic
import os
from dotenv import load_dotenv

# Load environment variables from .env file
# Similar to process.env in TypeScript
load_dotenv()

def main():
    """
    Say hello to Claude and get a response
    """
    # Create Anthropic client
    # TypeScript: const client = new Anthropic({ apiKey: ... })
    client = anthropic.Anthropic(
        api_key=os.environ.get("ANTHROPIC_API_KEY")
    )

    print("🤖 Sending message to Claude...\n")

    # Create message
    # Similar to a fetch() POST request in TypeScript
    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": "Hello! This is my first Python AI project. I'm a TypeScript developer learning Python for AI engineering. Can you give me an encouraging message?"
            }
        ]
    )

    # Print response
    # message.content is a list (array), [0] is the first element
    response_text = message.content[0].text

    print("✅ Claude's response:\n")
    print(response_text)
    print("\n" + "="*50)
    print("🎉 Success! Your Python environment is set up correctly!")
    print("="*50)

# Python entry point (similar to if (require.main === module) in TypeScript)
if __name__ == "__main__":
    main()
