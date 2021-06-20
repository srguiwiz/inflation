# Inflation Calculators

## Use

These inflation calculators are live online at
https://infl.at/
.

Each calculator immediately works in your browser,
but also then
can be installed from the browser to become an icon on your phone's home screen.

| &#x2003; | Country | Live At | Currency |
| --- | --- | --- | --- |
| ![US icon](us/inflation-us.svg) | US | https://infl.at/us/ | US$ |
| ![CA icon](ca/inflation-ca.svg) | Canada | https://infl.at/ca/ | CA$ |
| ![DE icon](de/inflation-de.svg) | Deutschland | https://infl.at/de/ | €, davor DM |
| ![UK icon](uk/inflation-uk.svg) | United Kingdom | https://infl.at/uk/ | £ |
| ![FR icon](fr/inflation-fr.svg) | France | https://infl.at/fr/ | €, avant cela F |
| ![CH icon](ch/inflation-ch.svg) | Schweiz | https://infl.at/ch/ | Fr. |
| ![AT icon](at/inflation-at.svg) | Österreich | https://infl.at/at/ | €, davor ÖS |
| ![IN icon](in/inflation-in.svg) | India | https://infl.at/in/ | ₹ |
| ![JP icon](jp/inflation-jp.svg) | 日本 | https://infl.at/jp/ | 円 |
| ![IL icon](il/inflation-il.svg) | ישראל | https://infl.at/il/ | &#x2067;₪ אחרי ל״י&#x2069; |
| ![QA icon](qa/inflation-qa.svg) | قطر | https://infl.at/qa/ | ر.ق |
| ![PH icon](ph/inflation-ph.svg) | Philippines | https://infl.at/ph/ | ₱ |
| ![CL icon](cl/inflation-cl.svg) | Chile | https://infl.at/cl/ | CLP$, antes de ese Eº |
| ![BW icon](bw/inflation-bw.svg) | Botswana | https://infl.at/bw/ | P |
| ![ID icon](id/inflation-id.svg) | Indonesia | https://infl.at/id/ | Rp |
| ![PK icon](pk/inflation-pk.svg) | پاکستان | https://infl.at/pk/ | ₨ |
| ![LB icon](lb/inflation-lb.svg) | لبنان | https://infl.at/lb/ | ⁧ل.ل.⁩ |
| ![CN icon](cn/inflation-cn.svg) | 中国 | https://infl.at/cn/ | 元 |
| ![BR icon](br/inflation-br.svg) | Brasil | https://infl.at/br/ | R$, e outros no passado |
| ![NG icon](ng/inflation-ng.svg) | Nigeria | https://infl.at/ng/ | ₦, preceded by £ |
| ![BD icon](bd/inflation-bd.svg) | বাংলাদেশ | https://infl.at/bd/ | ৳ |
| ![AU icon](au/inflation-au.svg) | Australia | https://infl.at/au/ | $, preceded by £ |

## More Countries

If you send a pull request, your calculator can be online too.

First, to understand what you will have to change, compare existing directories,
for example with `diff de in` .
Then, you can work on your files in a specific country directory.
You can work on files even without running a server, without node or npm.

You can fork this repository to derive a calculator

- for another country,
- for a currency and its predecessor,
- with more current data,
- with further back data, or
- with a different appearance.

One difficulty level up is to derive a calculator

- between currencies of countries.

The US, Canadian, and Swiss inflation calculators have been configured for their
single currency, respectively.
A historical currency switch is handled correctly in the German and Austrian
calculators, as an example.
Two switches are handled in the French calculator, as an example.
The code for multiple currencies is present equally in all calculators.
The Canadian and Swiss calculators are multilingual.
Right to left writing is supported.

This calculator is optimized for certain uses.

Numbers and notes taken, if any, stay on a user's device only.
Nothing gets sent to a server.

We are grateful to the people who have collected and processed the
information the consumer price index is based on in their countries,
and to those who have funded those efforts.

## Purpose

One purpose of this project is understanding and getting along,
across generations.

For example,
for a grandparent to understand why a kid wants to spend $20 on a shirt,
when their own shirts used to be $3.
And, for a kid to understand what it means a grandparent worked for $2 per hour.

This also is for people whose activities have prevented them from
paying attention to some aspects of money.
Sometimes they have to pay attention.
These calculators hopefully help making sense of numbers changing in time.

This app was started as an exercise.

## Outlook

The initial organization and structure of this project had been chosen to fit
the phase it has been in.

Incremental changes are expected.

Better development documentation is intended to be written on demand.

## Internationalization Services

For help with internationalization and localization,
for education, training, consulting, development, automation, and testing,
write to i18n at infl dot at.

Internationalization is work that enables localization.
