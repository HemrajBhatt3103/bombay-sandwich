import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const menuData = {
      "GRILL SANDWICH": [
        "Bombay Toasted Sandwich",
        "Samosa Veg Grill Sandwich", 
        "Samosa Veg Cheese Grill Sandwich",
        "Chocolate Grill Sandwich",
        "Plain Cheese Grill Sandwich",
        "Cheese Chain Grill",
        "Cheese Jam Grill",
        "Bread Butter Toasted",
        "Chatni Butter Toasted",
        "Jam Butter Toasted"
      ],
      "SPECIAL GRILL": [
        "Tandoori Paneer Grill (Onion, Capsicum, Cheese, Parcer)",
        "Chilli Cheese Grill (Onion, Capsicum, Cheese, Mayo)",
        "Mayogrill (Cabbage, Tomato, Cheese)",
        "Tangi Cheese Tomato Grill (Onion, Capsicum, Tomato, Cheese)",
        "Cheese Chili Corn (Mayo, Cheese, Corn)",
        "Jalapeno Corn (Jalapeno, Corn, Mayo, Cheese)",
        "Club Bombay Sandwich (3 Layer) (Cucumber, Tomato, Potato, Cheese, Mayo)",
        "Allo Mutter",
        "Kolhapuri Grill",
        "Paneer Masala Grill Sandwich",
        "Paneer Pudina Grill",
        "Mushroom Mayo Grill",
        "Paneer Mushroom Mayo Grill (8 Layers)"
      ]
    };

    return NextResponse.json({
      success: true,
      data: menuData,
      message: "Menu items retrieved successfully"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to retrieve menu items"
    }, { status: 500 });
  }
}