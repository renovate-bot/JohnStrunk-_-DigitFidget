# Linting requirements for all files

## Context and problem statement

By enforcing linting standards, the files in the repository will have a
uniform appearance, making it easier for developers to understand and navigate
the codebase. Consistent formatting and code style reduce cognitive load,
prevent style-related merge conflicts, and help maintain code quality as the
project grows.

## Decision and justification

All files in the repository must conform to the project's linting standards at
all times.

The `.github/lint-all.sh` script is provided to perform linting across the
entire repository. Any time changes are made to any file, this script must be
run, and all resulting errors and warnings must be immediately fixed before
changes are committed or merged. When fixing linting errors, care must be
taken to not alter the semantic meaning of the file—only formatting, style, or
other linting issues should be addressed, without changing the actual behavior
or content of the file. This ensures that the codebase remains consistently
linted and free of style violations.

## Other options considered

Other options considered:

- Relying on individual developer editors or IDEs to enforce linting: This
  approach is inconsistent and can lead to style drift over time.
- Running linting only on staged or tracked files: This may miss new or
  untracked files, leading to inconsistent code quality.

## Additional information

Related resources:

- [`design/README.md`](README.md): Overview of design and decision records
- [`.github/lint-all.sh`](../.github/lint-all.sh): Linting script referenced
in this decision
