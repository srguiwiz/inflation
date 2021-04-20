# Inflation Calculators

These inflation calculators are live online at
https://inflation.cmprh.com/
.

Each calculator works in your browser,
or can be installed from the browser to your phone's home screen.

| Country | Live At | Currency |
| --- | --- | --- |
| US | https://inflation.cmprh.com/us/ | US$ |
| Germany | https://inflation.cmprh.com/de/ | € after DM |
| Austria | https://inflation.cmprh.com/at/ | € after ÖS |

If you submit a pull request, your calculator can be online too.
First, to understand what you will have to change, compare existing directories
with `diff de at` .
You can work directly on the files in your new directory,
without running a server, if you prefer, without node, without npm.

You can fork this repository to derive a calculator

- for another currency,
- for a currency and its predecessor, or
- to change its appearance.

One difficulty level up is to derive a calculator

- between currencies of countries.

The US inflation calculator has been configured for a single currency.
A historical currency switch is handled correctly in the Austria calculator,
as an example.
The code for multiple currencies is present in both calculators.

This calculator is optimized for certain uses.

Numbers and notes taken, if any, stay on a user's device only.
Nothing gets sent to a server.

We are grateful to the people who have collected and processed the
information the consumer price index is based on in their countries,
and to those who have funded those efforts.
