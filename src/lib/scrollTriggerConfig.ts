const scrollTriggerConfig = (triggerTarget: any, debugMarker?: boolean) => {
  const config = {
    trigger: triggerTarget,
    start: "top 70%",
    end: "bottom 100%",
    markers: debugMarker || false,
    toggleActions: "play none none none",
  };

  return config;
};

export default scrollTriggerConfig;
