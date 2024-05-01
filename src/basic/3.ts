const someValue = (value: string | number) => {
  if (typeof value === "string") {
    return value.toLocaleLowerCase();
  } else {
    return value.toFixed(2);
  }
};

const onClick = (click: "enable" | "disable") => {
  if (click === "enable") {
    console.log("active");
  } else if (click === "disable") {
    console.log("not active");
  }
};
