import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface ParticlesBackgroundProps {
  variant?: "default" | "cyber" | "minimal";
}

export const ParticlesBackground = ({ variant = "default" }: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const getParticleConfig = () => {
    const baseConfig = {
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
    };

    if (variant === "cyber") {
      return {
        ...baseConfig,
        particles: {
          color: {
            value: ["#00FFF0", "#B026FF", "#0066FF"],
          },
          links: {
            color: "#00FFF0",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none" as const,
            enable: true,
            outModes: {
              default: "bounce" as const,
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      };
    }

    if (variant === "minimal") {
      return {
        ...baseConfig,
        particles: {
          color: {
            value: "#00FFF0",
          },
          move: {
            direction: "none" as const,
            enable: true,
            outModes: {
              default: "out" as const,
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      };
    }

    return {
      ...baseConfig,
      particles: {
        color: {
          value: ["#00FFF0", "#B026FF"],
        },
        links: {
          color: "#00FFF0",
          distance: 120,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
    };
  };

  return (
    <Particles
      id={`particles-${variant}`}
      init={particlesInit}
      options={getParticleConfig()}
      className="absolute inset-0 -z-10"
    />
  );
};
