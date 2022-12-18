# time-diff-for-humans

get difference between a time and the current time in a human readable format

### Getting Started

run

```sh
npm i time-diff-for-humans
```

<br>
import

```sh
const timeDiff = require("time-diff-for-humans");
or
import timeDiff from "time-diff-for-humans";
```

<br>
<h4>pass into the function a string which is in any valid date format</h4>
<br>
<strong>examples</strong>

```sh
timeDiff('2022-07-21 12:28:57'); // returns '7 hours ago'
```

```sh
timeDiff("2022-07-21 19:28:57"); // '58 minutes ago'
```

```sh
timeDiff("2022-03-21"); // '4 months ago'
```

```sh
timeDiff("2021-03-21"); // '1 year ago'
```

<br>
<strong>you can also pass a locale as a second argument</strong>
(currently supported locales are only `en` and `ka`)

```sh
timeDiff("2022-07-21 19:28:57", "ka"); //returns '1 საათის წინ'
```
