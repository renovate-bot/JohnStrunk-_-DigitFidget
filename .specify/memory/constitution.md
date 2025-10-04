<!--
Sync Impact Report
Version change: 0.0.0 → 1.0.0
List of modified principles: N/A (initial set)
Added sections: All core principles, Governance
Removed sections: None
Templates requiring updates:
✅ plan-template.md
✅ spec-template.md
✅ tasks-template.md
⚠ None pending
Follow-up TODOs: None. Ratification date set to 2025-10-04.
-->

# Digit Fidget Constitution

## Core Principles

### Test-Driven Development (TDD)

All features MUST be developed using TDD. Tests MUST be written before
implementation, MUST fail initially, and MUST pass after implementation. The
Red-Green-Refactor cycle is strictly enforced for all code changes.

**Rationale:** Ensures code correctness, prevents regressions, and enforces
discipline in feature development.

### Comprehensive Automated Testing

Every feature MUST have automated tests at both the unit and end-to-end (E2E)
levels. Test coverage MUST be maintained and enforced for all code paths. No
feature may be merged without passing all required tests.

**Rationale:** Guarantees reliability and confidence in releases, and supports
rapid iteration.

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

- The technology stack MUST support robust automated testing and typing (e.g.,
  TypeScript, modern JS frameworks).
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

**Version**: 1.0.0 | **Ratified**: 2025-10-04 | **Last Amended**: 2025-10-04
