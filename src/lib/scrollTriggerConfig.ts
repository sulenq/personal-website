const scrollTriggerConfig = (triggerTarget: any, debugMarker?: boolean) => {
  const config = {
    trigger: triggerTarget,
    start: "top center",
    end: "bottom center",
    markers: debugMarker || false,
    toggleActions: "play none none none",
  };

  return config;
};

export default scrollTriggerConfig;
