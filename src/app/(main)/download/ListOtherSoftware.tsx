import { Link, Typo } from '@/components';

/**
 * Renders list of other software products
 * @component ListOtherSoftware
 */
const ListOtherSoftware = () => {
  return (
    <Typo variant="list">
      <li>
        <strong>
          <Link href="https://keyboard-leds.com">Keyboard LEDs</Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link href="https://touchpad-blocker.com">Touchpad Blocker</Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link href="https://caps-lock-indicator.com">Caps Lock Indicator</Link>
        </strong>
      </li>
    </Typo>
  );
};

export default ListOtherSoftware;
