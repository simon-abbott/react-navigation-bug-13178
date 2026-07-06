#!/bin/sh

set -e

if [ -n "$SKIP_COCOAPODS_INSTALL" ] ; then
  echo 'SKIP_COCOAPODS_INSTALL was set, skipping pod install'
  exit
fi

cd ios

if command -v xcrun && bundle exec pod --version ; then
  bundle exec pod install --repo-update
else
  echo 'Warn: Unable to run cocoapods, skipping pod install'>&2
fi
