<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: GPL-3.0-or-later
-->

# @nextcloud/moment

[![REUSE status](https://api.reuse.software/badge/github.com/nextcloud-libraries/nextcloud-moment)](https://api.reuse.software/info/github.com/nextcloud-libraries/nextcloud-moment)
![Build Status](https://img.shields.io/github/actions/workflow/status/nextcloud-libraries/nextcloud-moment/lint-eslint.yml)
[![npm](https://img.shields.io/npm/v/@nextcloud/moment.svg)](https://www.npmjs.com/package/@nextcloud/moment)
[![Documentation](https://img.shields.io/badge/Documentation-online-brightgreen)](https://nextcloud.github.io/nextcloud-moment/)

Customized [moment.js](https://momentjs.com/) for Nextcloud automatic locale detection.

## Installation

```
npm i -S @nextcloud/moment
```

## Usage

```js
import moment from '@nextcloud/moment'

moment(1578511019).format('L')
// -> returns date formatted in format according to user locale
```
