import { Button } from "@chakra-ui/react";
import React from "react";

export default function ButtonPrimary(props: any) {
  return (
    <Button {...props} className="btn-ap clicky" color={"white"}>
      {props.children}
    </Button>
  );
}
