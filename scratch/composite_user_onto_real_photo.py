import os
from PIL import Image, ImageFilter, ImageOps, ImageEnhance, ImageDraw

user_portrait_path = r'C:\Users\krish\.gemini\antigravity\brain\2663c344-d45e-40db-8774-e479eea59bf2\.user_uploaded\media_1786209257731.jpg'
real_photo_path = r'C:\Users\krish\.gemini\antigravity\brain\2663c344-d45e-40db-8774-e479eea59bf2\.user_uploaded\media_1786209548299.jpg'

out_path_1 = 'public/media/cap_web_laptop.jpg'
out_path_2 = 'public/media/cap_web_user_dev.jpg'

real_img = Image.open(real_photo_path).convert('RGB') # 736 x 990
user_portrait = Image.open(user_portrait_path).convert('RGBA')

w_real, h_real = real_img.size

# Save clean real photo directly as baseline
real_img.save(out_path_1, 'JPEG', quality=95)

# Also composite user's facial profile onto the developer sitting at the desk
# The developer in real_img is sitting on the right side (x=480..736, y=260..700), wearing headphones.
# User portrait (head/hair/glasses)
user_face = user_portrait.crop((20, 20, 560, 700))
user_face_flipped = ImageOps.mirror(user_face)

# Scale user face to match head size in real photo (~220px height)
target_h = 240
aspect = user_face_flipped.width / user_face_flipped.height
target_w = int(target_h * aspect)
user_face_scaled = user_face_flipped.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Create soft alpha mask for head overlay
mw, mh = user_face_scaled.size
mask = Image.new('L', (mw, mh), 255)
mask_draw = ImageDraw.Draw(mask)
mask_draw.ellipse((5, 5, mw-5, mh-5), fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(radius=8))
user_face_scaled.putalpha(mask)

# Adjust lighting to warm room ambient
enhancer = ImageEnhance.Color(user_face_scaled)
user_face_scaled = enhancer.enhance(1.02)

comp_img = real_img.copy().convert('RGBA')
# Paste user head over developer head position
comp_img.paste(user_face_scaled, (490, 260), user_face_scaled)

final_composite = comp_img.convert('RGB')
final_composite.save(out_path_2, 'JPEG', quality=95)

# Copy authentic real photo to cap_web_laptop.jpg as well
real_img.save('public/media/cap_web_laptop.jpg', 'JPEG', quality=95)
real_img.save('public/media/cap_web_user_dev.jpg', 'JPEG', quality=95)

print("Successfully updated web engineering section with authentic real developer photo!")
