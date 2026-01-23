async function POST(params) {
    
    /// stripe API

}



// input field
// input job type

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `the user's majors are ${'user input'}, please guide him what to cover the basics and core topics`,
  });
  console.log(response.text);
}

main();