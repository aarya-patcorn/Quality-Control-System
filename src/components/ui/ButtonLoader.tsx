import React from "react";
import styled from "styled-components";

const ButtonLoader = () => {
    return (
        <Wrapper>
            <div className="loader-wrapper">
                {"Submitting".split("").map((l, i) => (
                    <span key={i} className="loader-letter">
                        {l}
                    </span>
                ))}
                <div className="loader" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.9rem;
    font-weight: 600;
    color: white;

    height: 24px;
  }

  .loader {
    position: absolute;
    inset: 0;
    mask: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 4px,
      black 5px,
      black 6px
    );
  }

  .loader::after {
    content: "";
    position: absolute;
    inset: 0;

    background-image: radial-gradient(circle, #fff 0%, transparent 60%);
    animation: move 1.5s infinite alternate;
  }

  @keyframes move {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(50%);
      opacity: 0;
    }
  }

  .loader-letter {
    opacity: 0;
    animation: fade 2s infinite;
  }

  .loader-letter:nth-child(n) {
    animation-delay: calc(0.1s * var(--i));
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default ButtonLoader;