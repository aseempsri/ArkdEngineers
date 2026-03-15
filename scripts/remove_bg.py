"""
Remove white/light background from logo images in src/assets.
Uses simple color thresholding - no AI model or network required.
Outputs PNG files with transparent backgrounds.
Requires: pip install pillow
"""
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Please install: pip install pillow")
    exit(1)

ASSETS_DIR = Path(__file__).resolve().parent.parent / "src" / "assets"
SKIP = {"favicon.svg", "Rohit_founder.png", "arkd-logo.jpeg", "arkd_logo.png"}
LOGO_EXTENSIONS = {".png", ".jpg", ".jpeg", ".avif", ".webp"}

# Threshold: pixels with brightness above this become transparent (0-255)
# 240 = remove near-white backgrounds
BRIGHTNESS_THRESHOLD = 240


def remove_light_background(img: Image.Image) -> Image.Image:
    """Make light/white pixels transparent."""
    img = img.convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        brightness = (r * 299 + g * 587 + b * 114) / 1000
        if brightness >= BRIGHTNESS_THRESHOLD:
            new_data.append((r, g, b, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img


def process_image(path: Path) -> None:
    """Remove background and save as PNG with transparency."""
    out_path = path.with_suffix(".png")
    print(f"  Processing: {path.name} -> {out_path.name}")

    img = Image.open(path)
    if img.mode == "P":
        img = img.convert("RGBA")
    elif img.mode != "RGBA":
        img = img.convert("RGB")
    img = remove_light_background(img)
    img.save(out_path, "PNG")

    if path.suffix.lower() in (".jpg", ".jpeg", ".avif", ".webp") and path != out_path:
        path.unlink()
        print(f"  Removed original: {path.name}")


def main():
    if not ASSETS_DIR.exists():
        print(f"Assets folder not found: {ASSETS_DIR}")
        return

    files = [f for f in ASSETS_DIR.iterdir() if f.is_file() and f.name not in SKIP]
    logo_files = [f for f in files if f.suffix.lower() in LOGO_EXTENSIONS]

    print(f"Found {len(logo_files)} logo images to process.\n")

    for path in sorted(logo_files):
        try:
            process_image(path)
        except Exception as e:
            print(f"  ERROR: {path.name}: {e}")

    print("\nDone. Light backgrounds removed, saved as .png with transparency.")


if __name__ == "__main__":
    main()
