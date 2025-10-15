# Instructions for AI coding assistants

The following instructions **MUST** be followed by any AI coding assistant
when making changes to this repository.

## Project architecture

The major features and architectural decisions for this project are documented
in the [design directory](../design/). Each feature and decision is captured
in a separate markdown file. These documents serve as a reference for
understanding the rationale behind various design choices and provide context
for future development. **All changes must be consistent with these
documents.**

Before making changes to the repository or adding new code:

- Review all existing decision records and feature descriptions in the `design/`
  directory. Changes and additions must align with these documents.
- If requirements or instructions from the user are ambiguous or incomplete,
  ask clarifying questions before proceeding.

## Rules

Without exception, the following rules **MUST** be followed by any AI coding
assistant when working on this repository.

- **Rule001**: After editing any file, run the [linting
  script](../.github/lint-all.sh) and fix any resulting errors or warnings.
  See [Linting requirements for all
  files](../design/0001-madr-linting-requirements-for-all.md) for details.
- **Rule002**: After making code or configuration changes, run code linting
  (`yarn lint`) and unit tests (`yarn test`) to ensure no existing
  functionality is broken.
- **Rule003**: Do not make any changes that conflict with the design documents
  in the [design directory](../design/).
- **Rule004**: Use context7 mcp to retrieve documentation. Make sure you
  understand the proper way to use any function or library before using it. DO
  NOT GUESS.
