# Assignment 4 & 5 - Manufacturing Practices Solutions
## B. Tech CSE 1st Semester

---

# ASSIGNMENT 4

## Question 1: Difference between Single Point and Multi-Point Cutting Tools (10 Marks)

### Single Point Cutting Tool
- Has **only one cutting edge**
- Examples: Lathe tools, shaping tools, planing tools
- **Advantages**: Simple design, easy to make, better surface finish, cheaper
- **Disadvantages**: Slow cutting, less material removal

### Multi-Point Cutting Tool  
- Has **two or more cutting edges**
- Examples: Drill bits, milling cutters, grinding wheels
- **Advantages**: Fast cutting, more material removal, efficient
- **Disadvantages**: Complex design, expensive, harder to make

### Key Differences
| Feature | Single Point | Multi-Point |
|---------|--------------|-------------|
| Cutting edges | One | Two or more |
| Speed | Slow | Fast |
| Cost | Low | High |
| Surface finish | Better | Good |
| Material removal | Less | More |

---

## Question 2: Lathe Machine and Its Main Parts (10 Marks)

### What is Lathe Machine?
A lathe machine **rotates the workpiece** and uses a cutting tool to remove material. It makes **round objects** like rods, pipes, and bolts.

### Main Parts of Lathe Machine

#### 1. **Bed**
- Base of the machine
- Supports all other parts
- Made of strong cast iron

#### 2. **Headstock**  
- Left side of machine
- Contains motor and gears
- Rotates the workpiece

#### 3. **Tailstock**
- Right side of machine  
- Supports long workpieces
- Can move left and right

#### 4. **Carriage**
- Holds the cutting tool
- Moves along the bed
- Controls cutting depth

#### 5. **Chuck**
- Holds the workpiece tightly
- Different types: 3-jaw, 4-jaw

#### 6. **Lead Screw & Feed Rod**
- Move the carriage automatically
- Lead screw for threading
- Feed rod for normal cutting

### Simple Diagram Layout
```
HEADSTOCK -------- CARRIAGE -------- TAILSTOCK
   |                   |                 |
CHUCK & MOTOR      CUTTING TOOL      SUPPORT
   |                   |                 |
================== BED ===================
        LEAD SCREW & FEED ROD
```

---

## Question 3: Types of Cutting Tools Used in Machining (10 Marks)

### Based on Material

#### 1. **High Speed Steel (HSS)**
- Made of iron + other metals
- **Good for**: General cutting, easy to sharpen
- **Used in**: Drills, lathe tools
- **Temperature limit**: 600°C

#### 2. **Carbide Tools**
- Very hard material
- **Good for**: High speed cutting, hard materials  
- **Used in**: CNC machines, heavy cutting
- **Temperature limit**: 1000°C

#### 3. **Ceramic Tools**
- Made from aluminum oxide
- **Good for**: Very high speed, finishing
- **Problem**: Brittle, breaks easily
- **Temperature limit**: 1200°C

#### 4. **Diamond Tools**
- Hardest cutting tool
- **Good for**: Perfect finish, non-iron materials
- **Cannot cut**: Iron and steel
- **Used for**: Aluminum, copper, plastics

### Based on Construction

#### 1. **Solid Tools**
- Made from one piece
- Examples: Small drills, end mills

#### 2. **Brazed Tools**  
- Hard tip attached to steel body
- Examples: Carbide tipped tools

#### 3. **Insert Tools**
- Replaceable cutting tips
- **Advantages**: Economical, quick change

### Common Cutting Tools
- **Turning tools**: For lathe operations
- **Drills**: For making holes
- **Milling cutters**: For flat surfaces
- **Reamers**: For accurate holes
- **Threading tools**: For making threads

---

## Question 4: Lathe Operations and Explanation of Two Processes (10 Marks)

### List of Lathe Operations
1. **Turning** - Make round surfaces
2. **Facing** - Make flat surfaces  
3. **Drilling** - Make holes
4. **Boring** - Make big holes
5. **Threading** - Make screw threads
6. **Parting** - Cut off pieces
7. **Knurling** - Make rough surface
8. **Grooving** - Make grooves
9. **Chamfering** - Make beveled edges
10. **Taper turning** - Make cone shapes

### Detailed Explanation

#### 1. **TURNING OPERATION**

**What is it?**
- Cutting tool removes material from outside of rotating workpiece
- Makes the workpiece smaller in diameter
- Most common lathe operation

**How it works:**
- Workpiece spins in chuck
- Tool moves parallel to workpiece
- Material comes off as chips
- Creates smooth round surface

**Types:**
- **Straight turning**: Makes cylinder
- **Taper turning**: Makes cone shape
- **Contour turning**: Makes curved shapes

**Used for:** Making shafts, rods, cylinders

#### 2. **THREADING OPERATION**

**What is it?**
- Makes screw threads on workpiece
- Can make both external (bolts) and internal (nuts) threads

**How it works:**
- Special threading tool used
- Tool moves along workpiece while it rotates
- Makes helical (spiral) grooves
- Takes several passes to complete

**Types:**
- **External threading**: On outside (for bolts)
- **Internal threading**: On inside (for nuts)

**Important points:**
- Must know thread pitch (distance between threads)
- Need correct threading tool
- Requires precise speed control

**Used for:** Making bolts, screws, threaded rods, nuts

---

## Question 5: Mechanics of Metal Cutting and Role of Shear Force (10 Marks)

### What Happens During Metal Cutting?

#### Step 1: Tool Contacts Material
- Cutting tool touches workpiece
- Material starts to bend (elastic deformation)
- Stress builds up in material

#### Step 2: Material Starts Breaking
- When stress becomes too high, material breaks
- This happens in a **shear zone** (breaking area)
- Material flows away as chips

#### Step 3: Continuous Cutting
- Process repeats continuously
- Chips flow over tool face
- New surface is created

### Role of Shear Force

#### What is Shear Force?
- **Force that breaks the material**
- Acts like scissors cutting paper
- Most important force in cutting

#### Where Does It Work?
- In the **primary shear zone**
- This is where material actually breaks
- Usually at 20-45° angle to cutting direction

#### Types of Forces in Cutting

1. **Cutting Force (Fc)**
   - Main force needed to cut
   - Determines power required
   - Biggest force

2. **Feed Force (Ff)**  
   - Force needed to move tool forward
   - Smaller than cutting force
   - Affects surface finish

3. **Thrust Force (Ft)**
   - Force pushing into workpiece
   - Can bend thin workpieces
   - Usually smallest force

### Types of Chips Formed

#### 1. **Continuous Chip**
- **Looks like**: Long ribbon
- **Formed in**: Soft materials (aluminum, mild steel)
- **Result**: Best surface finish
- **When**: High cutting speeds

#### 2. **Discontinuous Chip**
- **Looks like**: Small broken pieces  
- **Formed in**: Hard materials (cast iron)
- **Result**: Rough surface
- **When**: Low speeds, brittle materials

#### 3. **Built-up Edge Chip**
- **Problem**: Material sticks to tool
- **Formed in**: Medium speeds
- **Result**: Poor surface finish
- **Solution**: Use cutting fluid

### Factors Affecting Shear Force

#### Material Properties:
- **Harder materials** = More shear force needed
- **Soft materials** = Less shear force needed

#### Cutting Conditions:
- **Higher speed** = Less force (material gets hot and soft)
- **Deeper cuts** = More force needed
- **Sharp tools** = Less force needed

#### Tool Design:
- **Positive rake angle** = Easier cutting, less force
- **Sharp tools** = Less force required
- **Proper tool geometry** = Efficient cutting

### Heat Generation
- **60-80%** of heat comes from shear zone
- **15-25%** from tool rubbing on chip  
- **5-15%** from tool rubbing on workpiece
- **Too much heat** = Tool wear, poor accuracy

---

# ASSIGNMENT 5

## Question 1: Importance of Safety in Mechanical Workshop (10 Marks)

### Why Safety is Important?

#### 1. **Prevent Accidents**
- Workshop has dangerous machines and tools
- Can cause serious injuries or death
- Safety rules protect workers

#### 2. **Legal Requirements**  
- Government laws require safety measures
- Companies can be fined for unsafe practices
- Workers have right to safe workplace

#### 3. **Economic Benefits**
- Less accidents = Less hospital costs
- No work stoppage due to injuries
- Better productivity with safe workers

### Common Workshop Hazards

#### 1. **Machine Hazards**
- **Rotating parts**: Can catch clothes, hair
- **Sharp tools**: Can cut skin badly
- **Hot surfaces**: Can cause burns
- **Flying chips**: Can injure eyes

#### 2. **Electrical Hazards**
- **Shock**: Can kill instantly
- **Short circuits**: Can cause fires
- **Wet conditions**: Increase shock risk

#### 3. **Chemical Hazards**
- **Cutting fluids**: Can cause skin problems
- **Cleaning solvents**: Can be toxic
- **Welding fumes**: Can damage lungs

### Safety Measures

#### 1. **Personal Protective Equipment (PPE)**
- **Safety glasses**: Protect eyes from chips
- **Safety shoes**: Protect feet from falling objects
- **Gloves**: Protect hands (but not near rotating machines)
- **Aprons**: Protect clothes and body

#### 2. **Machine Safety**
- **Guards**: Cover dangerous parts
- **Emergency stops**: Quick shutdown buttons
- **Proper maintenance**: Keep machines in good condition
- **Training**: Learn to use machines safely

#### 3. **Workshop Rules**
- **No loose clothing** near machines
- **Keep workspace clean** - avoid slipping
- **Report unsafe conditions** immediately
- **No running** in workshop
- **Follow lockout/tagout** procedures

---

## Question 2: Working Principles and Applications of Two Basic Workshop Tools (10 Marks)

### Tool 1: VERNIER CALIPER

#### Working Principle
- Has **two scales**: Main scale and vernier scale
- **Main scale**: Shows whole millimeters
- **Vernier scale**: Shows fractions (0.1mm or 0.02mm)
- **Reading**: Main scale + Vernier scale reading

#### How to Use
1. Clean the jaws properly
2. Close jaws - check zero reading
3. Place object between jaws
4. Tighten gently (don't force)
5. Read main scale first
6. Find which vernier line matches main scale line
7. Add both readings

#### Applications
- **External measurement**: Outside diameter, length, width
- **Internal measurement**: Inside diameter, hole size  
- **Depth measurement**: How deep holes are
- **Step height measurement**: Height differences
- **Accuracy**: Up to 0.02mm

#### Advantages
- Very accurate measurements
- Multiple functions in one tool
- Easy to read
- Portable and handy

### Tool 2: MICROMETER

#### Working Principle
- Works on **screw thread principle**
- **Spindle** moves 0.5mm per full rotation
- **Thimble** divided into 50 parts
- Each division = 0.5/50 = 0.01mm

#### Parts
- **Frame**: U-shaped body
- **Anvil**: Fixed measuring surface
- **Spindle**: Moving measuring surface  
- **Thimble**: Shows fine measurements
- **Sleeve**: Shows coarse measurements
- **Ratchet**: Prevents over-tightening

#### How to Use
1. Check zero reading
2. Place object between anvil and spindle
3. Turn thimble until object is held firmly
4. Use ratchet for final tightening
5. Read sleeve reading (whole mm)
6. Add thimble reading (decimal part)

#### Applications
- **Very accurate external measurements**
- **Thickness measurement** of sheets, wires
- **Diameter measurement** of rods, pipes
- **Quality control** in manufacturing
- **Accuracy**: Up to 0.01mm

#### Advantages
- Highest accuracy among hand tools
- Consistent measurements
- Professional quality tool
- Long lasting

---

## Question 3: Process of Measuring and Marking in Mechanical Workshop (10 Marks)

### What is Measuring and Marking?

#### Measuring
- **Finding exact dimensions** of objects
- **Checking if parts fit** required specifications
- **Quality control** of manufactured parts

#### Marking  
- **Drawing lines** on material for cutting
- **Marking centers** for drilling holes
- **Indicating areas** to be machined

### Measuring Tools

#### 1. **Steel Rule**
- **Basic measuring tool**
- **Accuracy**: ±0.5mm
- **Used for**: Rough measurements, general work

#### 2. **Vernier Caliper**
- **High accuracy tool**  
- **Accuracy**: ±0.02mm
- **Used for**: Precise external, internal, depth measurements

#### 3. **Micrometer**
- **Highest accuracy**
- **Accuracy**: ±0.01mm  
- **Used for**: Very precise external measurements

#### 4. **Dial Gauge**
- **Measures small differences**
- **Shows variations** from reference point
- **Used for**: Checking roundness, flatness

### Marking Tools

#### 1. **Scriber**
- **Sharp pointed tool**
- **Makes thin lines** on metal
- **Used for**: Marking cutting lines

#### 2. **Divider**
- **Two pointed legs**
- **Makes circles** and arcs
- **Used for**: Marking circles, stepping off distances

#### 3. **Center Punch**
- **Makes small dents**
- **Prevents drill wandering**
- **Used for**: Marking drill centers

#### 4. **Surface Plate**
- **Flat reference surface**
- **Made of cast iron** or granite
- **Used for**: Accurate marking and checking

### Marking Process Steps

#### 1. **Preparation**
- Clean the workpiece surface
- Apply marking medium (chalk, dye)
- Set up proper lighting

#### 2. **Reference Setting**
- Choose reference edges or surfaces  
- Set up measuring tools
- Check tool accuracy

#### 3. **Marking**
- Mark all dimensions carefully
- Double-check critical dimensions
- Mark drill centers with center punch
- Use appropriate marking tools

#### 4. **Verification**
- Check all markings
- Verify dimensions against drawing
- Make corrections if needed

---

## Question 4: Types of Hammers Used in Workshop - Explain Two with Diagram (10 Marks)

### Common Workshop Hammers

1. **Ball Peen Hammer**
2. **Cross Peen Hammer**  
3. **Straight Peen Hammer**
4. **Soft Face Hammer**
5. **Dead Blow Hammer**
6. **Sledge Hammer**

### Detailed Explanation

#### 1. **BALL PEEN HAMMER**

**Description:**
- Most common workshop hammer
- Has **flat face** on one side
- Has **round ball** on other side
- Handle made of wood or fiberglass

**Parts:**
- **Head**: Made of hardened steel
- **Flat face**: For general striking
- **Ball peen**: For riveting and shaping
- **Handle**: Provides grip and shock absorption
- **Wedge**: Secures head to handle

**Simple Diagram:**
```
    [BALL PEEN]
         |
    [FLAT FACE]
         |
    [====HANDLE====]
```

**Uses:**
- **General hammering work**
- **Riveting operations** (using ball end)
- **Shaping metal sheets**
- **Driving pins and punches**
- **Breaking objects** (using flat face)

**Sizes:** Available from 50g to 1500g

#### 2. **CROSS PEEN HAMMER**

**Description:**
- Has **flat face** on one side  
- Has **wedge-shaped peen** on other side
- Peen runs **across the handle** (crosswise)
- Used for stretching and shaping metal

**Parts:**
- **Head**: Hardened steel construction
- **Flat face**: For normal hammering
- **Cross peen**: Wedge shape across handle
- **Handle**: Usually wooden
- **Eye**: Hole where handle fits

**Simple Diagram:**
```
    [CROSS PEEN]
    ============  (wedge across handle)
         |
    [FLAT FACE]
         |
    [====HANDLE====]
```

**Uses:**
- **Metal shaping work**
- **Stretching metal sheets**
- **Making grooves** in metal
- **Planishing** (smoothing) operations
- **General fabrication work**

**Advantages:**
- Good for **detailed metalwork**
- **Concentrates force** in small area
- **Versatile** for different operations

### Safety Tips for Hammer Use

#### 1. **Before Use**
- Check hammer head is tight
- Inspect handle for cracks
- Ensure proper weight for job

#### 2. **During Use**  
- **Strike squarely** - avoid glancing blows
- **Use appropriate force** - don't over-hit
- **Keep good grip** on handle
- **Wear safety glasses**

#### 3. **After Use**
- Clean hammer properly
- Store in safe place
- Check for damage

---

## Question 5: How to Measure Inside and Outside Diameters - Explain with Diagram (10 Marks)

### Outside Diameter Measurement

#### Method 1: Using Vernier Caliper

**Steps:**
1. **Clean** the measuring jaws
2. **Check zero reading** by closing jaws
3. **Open jaws** wider than object
4. **Place object** between external jaws
5. **Close jaws gently** until they touch object
6. **Tighten locking screw** if available
7. **Read measurement** from scales

**Simple Diagram:**
```
    VERNIER CALIPER - EXTERNAL MEASUREMENT
    
    |<-- MAIN SCALE
    |     |<-- VERNIER SCALE
    ======○====== 
    |           |  <-- EXTERNAL JAWS
    |    [O]    |  <-- OBJECT (ROUND)
    |           |
    ============
```

**Reading Method:**
- **Main scale reading** + **Vernier reading**
- Example: 25mm + 0.34mm = 25.34mm

#### Method 2: Using Micrometer

**Steps:**
1. **Check zero** by closing completely
2. **Place object** between anvil and spindle  
3. **Turn thimble** until object is held firmly
4. **Use ratchet** for final adjustment
5. **Read measurement** from sleeve and thimble

**Simple Diagram:**
```
    MICROMETER - EXTERNAL MEASUREMENT
    
    FRAME ─┐     ┌─ THIMBLE
           │  [O] │ <-- OBJECT
    ANVIL──┘     └─ SPINDLE
           SLEEVE
```

### Inside Diameter Measurement

#### Method 1: Using Vernier Caliper (Internal Jaws)

**Steps:**
1. **Insert internal jaws** into hole
2. **Expand jaws** until they touch hole walls
3. **Feel for slight resistance** - don't force
4. **Lock and read** measurement
5. **Ensure jaws are perpendicular** to hole axis

**Simple Diagram:**
```
    VERNIER CALIPER - INTERNAL MEASUREMENT
    
    ========○======
         |     |  <-- INTERNAL JAWS
    ┌────┴─────┴────┐
    │    HOLE/PIPE   │ <-- OBJECT WITH HOLE
    └───────────────┘
```

#### Method 2: Using Inside Micrometer

**Steps:**
1. **Select proper size** inside micrometer
2. **Insert into hole** carefully
3. **Expand** until both ends touch walls
4. **Rock gently** to find maximum reading
5. **Read measurement** from scale

#### Method 3: Using Telescopic Gauge + Outside Micrometer

**Steps:**
1. **Insert telescopic gauge** into hole
2. **Expand** until it touches hole walls
3. **Lock the gauge** in position
4. **Remove carefully** from hole
5. **Measure gauge** with outside micrometer

**Simple Diagram:**
```
    TELESCOPIC GAUGE METHOD
    
    Step 1: Insert and expand in hole
    ┌─────────────────┐
    │ ←──[GAUGE]──→   │ <-- HOLE
    └─────────────────┘
    
    Step 2: Measure with micrometer
    ANVIL ──[GAUGE]── SPINDLE
```

### Important Points

#### For Outside Diameter:
- **Use firm but gentle pressure**
- **Check multiple points** around circumference
- **Ensure perpendicular contact**
- **Account for tool accuracy**

#### For Inside Diameter:
- **Be very careful** not to scratch surface
- **Feel for proper contact** - don't guess
- **Take multiple readings** for accuracy  
- **Use proper size tools** for hole size

#### Common Mistakes:
- **Too much pressure** - gives wrong reading
- **Not perpendicular** - measures chord instead of diameter
- **Dirty tools** - affects accuracy
- **Wrong tool selection** - reduces accuracy

### Accuracy Levels:
- **Steel rule**: ±0.5mm
- **Vernier caliper**: ±0.02mm  
- **Micrometer**: ±0.01mm
- **Bore gauge**: ±0.005mm (for very accurate work)
