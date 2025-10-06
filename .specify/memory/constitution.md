<!--
Sync Impact Report
Version change: 1.3.0 → 1.4.0
List of modified principles: None
Added sections: Additional Constraints (Yarn Berry package management)
Removed sections: None
Templates requiring updates:
✅ plan-template.md
✅ spec-template.md
✅ tasks-template.md
⚠ None pending
Follow-up TODOs: None. Ratification date remains 2025-10-04. Last amended updated to 2025-10-06.
-->

# Digit Fidget Constitution

## Application Summary

Digit Fidget is a simple puzzle game where the user is presented with a random grid of cells, each containing a number from 1-9. Each column and row has a target sum. The objective of the game is to toggle the cells (turning them on or off) such that the "on" cells for each column and row match the target sum.

## Core Principles

### Test-Driven Development (TDD)

All features MUST be developed using TDD. Tests MUST be written before
implementation, MUST fail initially, and MUST pass after implementation. The
Red-Green-Refactor cycle is strictly enforced for all code changes.

**Rationale:** Ensures code correctness, prevents regressions, and enforces
discipline in feature development.

### Comprehensive Automated Testing

Every feature MUST have automated tests at both the unit and end-to-end (E2E) levels. Unit test coverage MUST be maintained at a minimum of 80% for all code paths. Test coverage MUST be enforced in CI. No feature may be merged without passing all required tests and meeting the minimum coverage threshold.

**Rationale:** Guarantees reliability, confidence in releases, and supports rapid iteration. The 80% coverage floor ensures a baseline of code quality and defect prevention.

### Code Documentation

All code MUST be properly documented. Public APIs, modules, and complex logic
MUST have clear, up-to-date documentation. Documentation is a required part of
the review and merge process.

**Rationale:** Facilitates onboarding, maintenance, and collaboration.

### Enforced Typing

All code MUST use and enforce optional typing specifications provided by the
language and toolchain. Type checks MUST pass in CI. No code with type errors
may be merged.

**Rationale:** Reduces runtime errors and improves code clarity and
maintainability.

### Progressive Web App (PWA) & Mobile-First

The game MUST be implemented as a PWA, optimized for mobile-first but fully
functional on desktop browsers.

**Rationale:** Ensures accessibility and reach across devices.

## Additional Constraints

- The technology stack for Digit Fidget is Vite and React. All code MUST be written using this stack.
- Automated testing MUST use Vitest for unit/integration tests and Playwright for end-to-end (E2E) browser testing.
- The stack MUST support robust automated testing and typing (TypeScript is required).
- Yarn (Berry) MUST be used for all package management and dependency installation.
- All dependencies MUST be open source and actively maintained.
- Accessibility and performance best practices MUST be followed.

## Development Workflow

- All code changes MUST be peer-reviewed.
- CI/CD pipelines MUST enforce all principles above.
- Feature branches MUST pass all tests and type checks before merge.
- Releases MUST be versioned semantically.
- The `.github/lint-all.sh` script MUST be run after each change to enforce
  linting via pre-commit before changes are considered complete.

## Governance

- This constitution supersedes all other development practices for Digit Fidget.
- Amendments require documentation, team approval, and a migration plan if
  breaking.
- All PRs and reviews MUST verify compliance with these principles.
- Constitution versioning follows semantic versioning:
  - MAJOR: Backward incompatible governance/principle removals or
    redefinitions.
  - MINOR: New principle/section added or materially expanded guidance.
  - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
- Compliance reviews are required at each release.

**Version**: 1.4.0 | **Ratified**: 2025-10-04 | **Last Amended**: 2025-10-06
