export default function returnHowManyArguments(...myArgs) {
  let argcount = 0 ;
  for (const arg of myArgs) {
    argcount += 1;
  }
  return argcount;
}
