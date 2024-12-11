import Footer from "../components/footer.tsx";
import Ascii from "../components/ascii.tsx";
import { CopyBlock, dracula } from "react-code-blocks";

function Home() {
  const codeEx = `
var i = 0;
var string = "";
var array = ["cat", "on", "bike"];

while (i < 3) {
  var string = string + array[i]
  var i = i + 1;
}

// cattify turns the string into cat-speak (returns a String type)
meowln(cattify(string));

// cattfusion generates a cat image based on the string given (returns a String type)
var url = cattfusion(string); 
meow(url);

`;

  const codeExOut = `
Meow! Prrt. Meow-meow-meow! Hiss. Prrrp. Meow! Hiss. Hiss. Meow-prrt-meow!
catting...
/PATH/TO/FILE/*.jpg

`;

  const codeEx2 = `
// cattsort sorts an array by deconstructing a Catt Array and using a Catt themed LLM.. (returns an Array type)
// cats are lazy sometimes though
var a = cattsort([false, 12 + 3, 1, 2, "hello", [2, 3, 4]]);

if ([true, false, false, true][0]) {
  meowln(a);
}

`;

  const codeExOut2 = `
[1, 2, 15, false, hello, [2, 3, 4]]

`;

  return (
    <>
      <p className="mt-8 font-monaspice text-start">This is Catt,</p>
      <p className="mt-4 font-monaspice text-sm text-start">
        a programming langage using ridiculous syntax like inline array and
        function calling, as well as some fun integrations with ai.
      </p>
      <hr className="my-10 w-full" style={{ borderTop: "2px solid white" }} />
      <p className="mt-8 font-monaspice text-start">To download..</p>
      <p className="mt-4 font-monaspice text-start text-sm">
        - make sure you have Go installed
      </p>
      <br />
      <CopyBlock
        language="bash"
        theme={dracula}
        text="$ git clone https://github.com/daikonk/catt.git && cd catt"
        showLineNumbers={false}
        codeBlock
      />
      <p className="mt-4 font-monaspice text-start text-sm">
        {"exclude <file> for REPL"}
      </p>
      <br />
      <CopyBlock
        language="bash"
        theme={dracula}
        text="$ go run main.go <file>"
        showLineNumbers={false}
        codeBlock
      />
      <hr className="my-10 w-full" style={{ borderTop: "2px solid white" }} />
      <p className="mt-8 font-monaspice text-start">For the Catt LSP..</p>
      <p className="mt-4 font-monaspice text-start text-sm">
        - make sure you have TypeScript and Npm installed
      </p>
      <p className="mt-4 font-monaspice text-start text-sm">
        - For LSP installation instructions visit the LSP{" "}
        <a
          className="text-blue-600 hover:text-blue-700 active:text-blue-800"
          target="_blank"
          href="https://github.com/daikonk/catt-lsp"
        >
          GitHub
        </a>
      </p>
      <p className="mt-8 font-monaspice text-start">Tested LSP Mediums..</p>
      <p className="mt-4 font-monaspice text-start text-sm">- VSCode</p>
      <p className="mt-4 font-monaspice text-start text-sm">
        - NeoVim (vanilla dist)
      </p>
      <br />
      <CopyBlock
        language="bash"
        theme={dracula}
        text="$ git clone https://github.com/daikonk/catt-lsp.git && cd catt-lsp"
        showLineNumbers={false}
        codeBlock
      />
      <hr className="my-10 w-full" style={{ borderTop: "2px solid white" }} />
      <p className="mt-8 font-monaspice text-start">
        Code Examples with Outputs
      </p>
      <p className="mt-4 font-monaspice text-sm text-start">
        these will serve as documentation.. most of my learning is done through
        trial-by-fire and since this is a fun language, i want to make it fun
        for everyone else too ( built-ins explained in examples )
      </p>
      <br />
      <div className="text-start">
        <CopyBlock
          language="jsx"
          theme={dracula}
          text={codeEx}
          showLineNumbers={false}
          codeBlock={true}
        />
      </div>
      <br />
      <div className="text-start">
        <CopyBlock
          language="bash"
          theme={dracula}
          text={codeExOut}
          showLineNumbers={false}
          codeBlock={true}
        />
      </div>
      <hr className="my-10 w-full" style={{ borderTop: "2px solid white" }} />
      <div className="text-start">
        <CopyBlock
          language="jsx"
          theme={dracula}
          text={codeEx2}
          showLineNumbers={false}
          codeBlock={true}
        />
      </div>
      <br />
      <div className="text-start">
        <CopyBlock
          language="bash"
          theme={dracula}
          text={codeExOut2}
          showLineNumbers={false}
          codeBlock={true}
        />
      </div>
      <hr className="my-10 w-full" style={{ borderTop: "2px solid white" }} />
      <p className="mt-8 font-monaspice text-center">Links</p>
      <div className="flex flex-row py-4 w-full justify-between">
        <div className="w-1/3">
          <a
            className="font-monaspice text-sm text-blue-600 hover:text-blue-700 active:text-blue-800"
            target="_blank"
            href="https://github.com/daikonk/catt"
          >
            Catt
          </a>
        </div>
        <div className="w-1/3">
          <a
            className="font-monaspice text-sm text-blue-600 hover:text-blue-700 active:text-blue-800"
            target="_blank"
            href="https://github.com/daikonk/catt-lsp"
          >
            Catt-Lsp
          </a>
        </div>
        <div className="w-1/3">
          <a
            className="font-monaspice text-sm text-blue-600 hover:text-blue-700 active:text-blue-800"
            target="_blank"
            href="https://github.com/daikonk/catt-site"
          >
            Catt-Site
          </a>
        </div>
      </div>
      <div className="overflow-hidden flex justify-center">
        <Ascii />
      </div>
      <Footer />
    </>
  );
}

export default Home;
