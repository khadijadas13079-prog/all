#!/usr/bin/env python3
"""
Module Docstring
A description of your program goes here.
"""

import argparse

def main():
    """Main function"""
    print("Hello, World!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Description of your program")
    parser.add_argument("--option", help="An example option")
    args = parser.parse_args()
    
    main()
