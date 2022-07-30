# Timeline Composer

A small collection of utility components for declaratively constructing timelines with repetitions, delays, and auto-removing elements.

## Components

### Delay

Delays rendering its children for the specified amount of time.

```tsx
<Delay seconds={2.5}>
  <p>I will only render after 2.5 seconds!</p>
</Delay>
```

### Repeat

Repeats (unmounts and re-mounts) its children for the specified number of times, with the specified delay between each repetition.

```tsx
<Repeat seconds={2.5} times={3}>
  <p>
    I will automatically unmount and re-mount every 2.5 seconds, and stop after showing 3
    times, because that is clearly enough!
  </p>
</Repeat>
```

The default for `times` is `Infinity`, so it will repeat forever:

```tsx
<Repeat seconds={2.5}>
  <p>I will repeat forever.</p>
  <p>Have a random number: {Math.random()}</p>
</Repeat>
```

Only repeat 3 times (default is `Infinity`):

### Lifetime

Will render its children immediately, but remove them after the specified time.

```tsx
<Lifetime seconds={2.5}>
  <p>I'm only here for 2.5 seconds. Cya!</p>
</Lifetime>
```

## Recipes

### Combining Delay, Repeat, and Lifetime

Things get a little more interesting when you combine these.

```tsx
<Lifetime seconds={10}>
  <Repeat seconds={0.5}>
    <Lifetime seconds={0.25}>
      <p>I miss the blink tag!</p>
    </Lifetime>
  </Repeat>
</Lifetime>
```

### Repeatedly Toggle between different children

```tsx
<Repeat seconds={1}>
  <Lifetime seconds={0.5}>
    <p>See</p>
  </Lifetime>

  <Delay seconds={0.5}>
    <p>Saw</p>
  </Delay>
</Repeat>
```

### Waterfall animations

Delays can be nested to create a waterfall of animations.

```tsx
<Delay seconds={1}>
  <p>One...</p>

  <Delay seconds={0.5}>
    <p>Two...</p>

    <Delay seconds={0.5}>
      <p>...three!</p>
    </Delay>
  </Delay>
</Delay>
```
