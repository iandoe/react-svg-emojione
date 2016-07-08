# React Emojione

All the Emoticons available in the Emojione set generated as react stateless components.

They are named after their shortcodes for convenience

## Usage

```
import * as Emojione from 'react-emojione';

export default function MyComponent() {
  return (
    <div>
      <Emojione.slight_frown />
    </div>
  );
}

```

## Updating and rebuilding

Running `npm run build` will rebuild all the components in the `dist/` folder

## TODO
- [ ] Support alternate emojis (through props)
- [ ] Support alternate shortcodes
- [ ] Figure out why "gay_pride_flag" does not have a corresponding svg file
