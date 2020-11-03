//Your friend has recently started using Codewars to learn more advanced coding. They have just created their first kata, and they want to write a proper description for it, using codeblocks, images and hyperlinks.

//However, they are struggling to understand how to use Markdown formatting properly, so they decide to ask for your help, by having you write a program that will generate some of the syntaxes for you.

//Markdown syntaxes
//links: [displayed text](url address)
//images: ![replacement message](url address)
//codeblocks: we'll use multiline codeblocks like the following
```language
code
```

function generateMarkdowns(markdown,text,urlOrLanguage) {
  // write your code here
  let answer = ''
  switch (markdown){
      case 'link':
      answer+=`[${text}](${urlOrLanguage})`;
      break;
      case 'img':
      answer+=`![${text}](${urlOrLanguage})`;
      break;
      default:
      answer+='```' + urlOrLanguage + '\n' + text + '\n```';
  }
  return answer
};
