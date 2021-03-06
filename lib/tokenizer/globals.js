export const singleQuote = '\''.charCodeAt(0);
export const doubleQuote = '"'.charCodeAt(0);
export const backslash = '\\'.charCodeAt(0);
export const backTick = '`'.charCodeAt(0);
export const slash = '/'.charCodeAt(0);
export const newline = '\n'.charCodeAt(0);
export const space = ' '.charCodeAt(0);
export const feed = '\f'.charCodeAt(0);
export const tab = '\t'.charCodeAt(0);
export const carriageReturn = '\r'.charCodeAt(0);
export const openedParenthesis = '('.charCodeAt(0);
export const closedParenthesis = ')'.charCodeAt(0);
export const openedCurlyBracket = '{'.charCodeAt(0);
export const closedCurlyBracket = '}'.charCodeAt(0);
export const openSquareBracket = '['.charCodeAt(0);
export const closeSquareBracket = ']'.charCodeAt(0);
export const semicolon = ';'.charCodeAt(0);
export const asterisk = '*'.charCodeAt(0);
export const colon = ':'.charCodeAt(0);
export const comma = ','.charCodeAt(0);
export const dot = '.'.charCodeAt(0);
export const atRule = '@'.charCodeAt(0);
export const tilde = '~'.charCodeAt(0);
export const hash = '#'.charCodeAt(0);


export const atEndPattern = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
export const wordEndPattern = /[ \n\t\r\f\(\)\{\}:,;@!'"\\\]\[#]|\/(?=\*)/g;
export const badBracketPattern = /.[\\\/\("'\n]/;

export const pageSelectorPattern = /^@page[^\w-]+/;
export const variableSpaceColonPattern = /^\s*:/;
export const variablePattern = /^@[^:\(\{]+:/;
export const hashColorPattern = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/;
