const outerFunction = () => {
  let inc = 0;
  const innerFunction = () => {
    console.log(++inc);
  };
  return innerFunction;
};

const inner = outerFunction();
inner(); //1
inner(); //2
inner(); //3
inner(); //4
inner(); //5
