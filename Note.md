
While React memo is used to wrap React components to prevent re-renderings,
useMemo is used to memoize values.

every time (no argument)
only on mount and unmount ([] argument)
only when a certain variable changes (e.g. [count] argument)