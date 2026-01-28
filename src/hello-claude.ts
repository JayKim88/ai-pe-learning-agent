/**
 * Hello Claude - First TypeScript Example
 *
 * This is your first interaction with Claude using the Anthropic SDK in TypeScript.
 * Run with: npm run dev
 */

import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function main() {
  // Check if API key is set
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("❌ Error: ANTHROPIC_API_KEY not found in environment variables");
    console.log("Please create a .env file with your API key:");
    console.log("  cp .env.example .env");
    console.log("  # Then edit .env and add your API key");
    process.exit(1);
  }

  // Initialize the Anthropic client
  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  console.log("🚀 Sending message to Claude...\n");

  try {
    // Create a message
    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: "Hello, Claude! Introduce yourself in one sentence and tell me why TypeScript is great for building AI agents.",
        },
      ],
    });

    // Extract and display the response
    const response = message.content[0];
    if (response.type === "text") {
      console.log("💬 Claude's response:");
      console.log(response.text);
      console.log();
    }

    // Display token usage
    console.log("📊 Token Usage:");
    console.log(`  Input tokens: ${message.usage.input_tokens}`);
    console.log(`  Output tokens: ${message.usage.output_tokens}`);
    console.log(`  Total tokens: ${message.usage.input_tokens + message.usage.output_tokens}`);

    // Calculate approximate cost (check current pricing at https://www.anthropic.com/pricing)
    // Claude 3.5 Sonnet pricing (as of Jan 2026): $3 per 1M input tokens, $15 per 1M output tokens
    const inputCost = (message.usage.input_tokens / 1_000_000) * 3;
    const outputCost = (message.usage.output_tokens / 1_000_000) * 15;
    const totalCost = inputCost + outputCost;

    console.log(`\n💰 Approximate Cost:`);
    console.log(`  Input: $${inputCost.toFixed(6)}`);
    console.log(`  Output: $${outputCost.toFixed(6)}`);
    console.log(`  Total: $${totalCost.toFixed(6)}`);

    console.log("\n✅ Success! Your TypeScript + Anthropic SDK setup is working.");
  } catch (error) {
    console.error("❌ Error calling Anthropic API:");
    if (error instanceof Error) {
      console.error(error.message);
    }
    process.exit(1);
  }
}

// Run the main function
main();
