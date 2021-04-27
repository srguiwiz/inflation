# Inflation Calculators

## Use

These inflation calculators are live online at
https://inflation.cmprh.com/
.

Each calculator works in your browser,
or can be installed from the browser to your phone's home screen.

| &#x2003; | Country | Live At | Currency |
| --- | --- | --- | --- |
| ![US icon](us/inflation-us.svg) | US | https://inflation.cmprh.com/us/ | US$ |
| ![CA icon](ca/inflation-ca.svg) | Canada | https://inflation.cmprh.com/ca/ | CA$ |
| ![DE icon](de/inflation-de.svg) | Germany | https://inflation.cmprh.com/de/ | € after DM |
| ![FR icon](fr/inflation-fr.svg) | France | https://inflation.cmprh.com/fr/ | € after F |
| ![CH icon](ch/inflation-ch.svg) | Switzerland | https://inflation.cmprh.com/ch/ | Fr. |
| ![AT icon](at/inflation-at.svg) | Austria | https://inflation.cmprh.com/at/ | € after ÖS |

## More Currencies

If you send a pull request, your calculator can be online too.
First, to understand what you will have to change, compare existing directories
with `diff de ca` .
Then, you can work on your files in your new directory.
Also, if you prefer,
you can work on files even without running a server, without node, without npm.

You can fork this repository to derive a calculator

- for another currency,
- for a currency and its predecessor, or
- with a different appearance.

One difficulty level up is to derive a calculator

- between currencies of countries.

The US, Canadian, and Swiss inflation calculators have been configured for their
single currency, respectively.
A historical currency switch is handled correctly in the German and Austrian
calculators, as an example.
Two switches are handled in the French calculator, as an example.
The code for multiple currencies is present equally in all calculators.

This calculator is optimized for certain uses.

Numbers and notes taken, if any, stay on a user's device only.
Nothing gets sent to a server.

We are grateful to the people who have collected and processed the
information the consumer price index is based on in their countries,
and to those who have funded those efforts.
