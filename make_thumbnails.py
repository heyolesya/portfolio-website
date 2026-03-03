import cv2
import numpy as np
from pathlib import Path
import sys

SRC = Path("thumbnails-source")

VIDEOS = [
    ("mtv-unplugged",        (42,  42,  255)),   # Electric Blue
    ("believe-in-love",      (255, 51,  85)),    # Deep Coral
    ("nct127-superhuman",    (61,  0,   200)),   # Indigo
    ("this-is-normal",       (26,  107, 58)),    # Forest Green
    ("film-school",          (224, 112, 0)),     # Amber
    ("tattooin",             (204, 17,  119)),   # Hot Magenta
    ("infographics-show",    (0,   122, 110)),   # Teal
    ("netlenka-brainstorm",  (85,  0,   204)),   # Deep Purple
    ("yana-chu-podcast",     (192, 74,  42)),    # Terracotta
    ("showreel",             (42,  42,  255)),   # Electric Blue
]

def edges_canny(gray):
    """Clean Canny: aggressive blur + high thresholds = only dominant contours."""
    blurred = cv2.GaussianBlur(gray, (9, 9), 0)
    edges = cv2.Canny(blurred, 60, 160)
    # Close small gaps between line segments
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    edges = cv2.morphologyEx(edges, cv2.MORPH_CLOSE, kernel)
    # Thicken lines
    edges = cv2.dilate(edges, np.ones((3, 3), np.uint8), iterations=1)
    return edges

def edges_sketch(gray):
    """Pencil-sketch dodge method — naturally clean, no noise."""
    inv = 255 - gray
    blurred = cv2.GaussianBlur(inv, (21, 21), 0)
    sketch = cv2.divide(gray, 255 - blurred, scale=256.0)
    # Threshold: keep only dark strokes (strong lines)
    _, binary = cv2.threshold(sketch, 230, 255, cv2.THRESH_BINARY_INV)
    binary = cv2.dilate(binary, np.ones((2, 2), np.uint8), iterations=1)
    return binary

def make_thumbnail(name, bg_rgb, method="sketch"):
    src = SRC / f"{name}.jpg"
    if not src.exists():
        print(f"  SKIP {name} — source not found")
        return

    img = cv2.imread(str(src))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    edges = edges_sketch(gray) if method == "sketch" else edges_canny(gray)

    h, w = edges.shape
    bg = np.full((h, w, 3), bg_rgb[::-1], dtype=np.uint8)  # BGR
    bg[edges > 0] = (255, 255, 255)

    out_dir = Path(f"thumbnails-{method}")
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / f"{name}.jpg"
    cv2.imwrite(str(out_path), bg, [cv2.IMWRITE_JPEG_QUALITY, 95])
    print(f"  OK  {name}.jpg")

method = sys.argv[1] if len(sys.argv) > 1 else "sketch"
print(f"Method: {method}")
for name, color in VIDEOS:
    make_thumbnail(name, color, method)
print(f"\nDone — saved to ./thumbnails-{method}/")
