# @kimhongyeon/use-lock-body-scroll

A React hook to lock body scroll.

In many similar libraries, only the body overflow is set to hidden.

However, this approach may not work well in various situations. For example, when displaying a layer popup, the internal scroll should work while the body scroll should not.

This library not only sets the overflow to hidden but also sets the position to fixed, fundamentally preventing the body from moving. It also remembers the scroll position and restores it when the lock is released.

## Installation

```bash
npm install @kimhongyeon/use-lock-body-scroll
```
또는
```bash
yarn add @kimhongyeon/use-lock-body-scroll
```

## Usage
```jsx
import React, { useState } from 'react';
import { useLockBodyScroll } from '@kimhongyeon/use-lock-body-scroll';

const App = () => {
  const [isLocked, setIsLocked] = useState(false);

  useLockBodyScroll(isLocked);

  return (
    <div>
      <button onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? 'Unlock Scroll' : 'Lock Scroll'}
      </button>
    </div>
  );
};

export default App;
```

## Options
useLockBodyScroll hook can take an options object as the second argument.
- lockDelay (default: 0): The delay before applying the scroll lock (in milliseconds).

## Contributing
Please submit bug reports and feature requests through the [issue tracker](https://github.com/kimhongyeon/use-lock-body-scroll/issues).  

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/kimhongyeon/use-lock-body-scroll/LICENSE) file for details.
