# Benchmark

```
semiff load time: 1.3529 ms
semver load time: 10.0427 ms
semver-diff load time: 6.7572 ms

# basic 1.0.0 -> 1.1.0
  semver x 1,635,459 ops/sec ±1.09% (95 runs sampled)
  semver-diff x 696,929 ops/sec ±1.04% (96 runs sampled)
  semiff x 4,594,155 ops/sec ±1.67% (85 runs sampled)

# patch version increase
  semver x 1,466,922 ops/sec ±0.59% (95 runs sampled)
  semver-diff x 643,989 ops/sec ±1.12% (97 runs sampled)
  semiff x 4,599,802 ops/sec ±1.37% (91 runs sampled)

# minor version increase
  semver x 1,616,677 ops/sec ±0.82% (93 runs sampled)
  semver-diff x 692,840 ops/sec ±1.53% (95 runs sampled)
  semiff x 4,720,885 ops/sec ±1.03% (93 runs sampled)

# major version increase
  semver x 1,757,493 ops/sec ±0.84% (92 runs sampled)
  semver-diff x 807,874 ops/sec ±0.33% (95 runs sampled)
  semiff x 4,795,109 ops/sec ±1.05% (90 runs sampled)

# pre-release version compare
  semver x 394,427 ops/sec ±2.20% (93 runs sampled)
  semver-diff x 279,221 ops/sec ±0.77% (93 runs sampled)
  semiff x 2,551,796 ops/sec ±1.36% (93 runs sampled)

# pre-release vs normal version compare
  semver x 684,669 ops/sec ±0.77% (98 runs sampled)
  semver-diff x 374,692 ops/sec ±0.79% (94 runs sampled)
  semiff x 3,273,946 ops/sec ±1.04% (96 runs sampled)

# complex versions
  semver x 359,191 ops/sec ±0.89% (98 runs sampled)
  semver-diff x 233,603 ops/sec ±1.86% (94 runs sampled)
  semiff x 2,485,987 ops/sec ±1.96% (95 runs sampled)
```