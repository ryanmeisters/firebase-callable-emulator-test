#!/bin/sh

npm run --prefix functions build
firebase emulators:start --debug
