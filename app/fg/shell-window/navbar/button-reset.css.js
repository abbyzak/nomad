import { css } from '../../vendor/lit-element/lit-element';

export default css`
  button {
    background: transparent;
    border: 0;
    border-radius: 6px;
    padding: 0;
    transition: all 0.15s ease;
  }

  button:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.3);
  }

  button:not(:disabled):hover {
    background: var(--bg-color--navbar-btn--hover, rgba(0, 0, 0, 0.08));
    transform: translateY(-1px);
  }

  button:disabled {
    opacity: 0.5;
  }

  button.pressed {
    background: var(--bg-color--navbar-btn--pressed, rgba(0, 0, 0, 0.12));
    color: var(--text-color--navbar-btn--pressed, #222);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;
