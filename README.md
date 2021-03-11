# Compository DNA

## Building

```bash
CARGO_TARGET_DIR=target cargo build --release --target wasm32-unknown-unknown
hc dna pack compository.dna.workdir/
hc app pack happ/
```

## Running

```bash
hc s generate happ -r=8888
```