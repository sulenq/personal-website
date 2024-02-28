import { Button, Text, Tooltip } from "@chakra-ui/react";
import { getLang, setLang as setLangLocal } from "../lib/lang";
import useTrigger from "../global/useTrigger";

export default function LangSwitcher(props: any) {
  const lang = getLang();
  const { trigger, setTrigger } = useTrigger();

  const onSwitchLang = () => {
    if (lang === "id") {
      setLangLocal("en");
      setTrigger(!trigger);
    } else {
      setLangLocal("id");
      setTrigger(!trigger);
    }
  };

  return (
    <Tooltip>
      <Button
        {...props}
        className={props.className || "btn"}
        onClick={onSwitchLang}
        // w={"70px"}
        px={"4px !important"}
      >
        <Text>{lang === "en" ? "ID" : "EN"}</Text>
      </Button>
    </Tooltip>
  );
}
