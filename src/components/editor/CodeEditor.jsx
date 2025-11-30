'use client'

import { Editor } from '@monaco-editor/react'

export default function CodeEditor({ value, onChange, language = 'javascript' }) {
  const defaultCode = {
    javascript: `function solve() {
  // Write your code here
  
}`,
    python: `def solve():
    # Write your code here
    pass`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    // Write your code here
    return 0;
}`,
    java: `public class Solution {
    public static void main(String[] args) {
        // Write your code here
    }
}`
  }

  return (
    <div className="h-full border border-gray-300 rounded-lg overflow-hidden">
      <Editor
        height="100%"
        language={language}
        value={value || defaultCode[language]}
        onChange={onChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on'
        }}
      />
    </div>
  )
}