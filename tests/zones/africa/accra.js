"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Accra"] = {
	"1918" : helpers.makeTestYear("Africa/Accra", [
		["1918-01-01T00:00:51+00:00", "23:59:59", "LMT", 52 / 60],
		["1918-01-01T00:00:52+00:00", "00:00:52", "GMT", 0]
	]),

	"1936" : helpers.makeTestYear("Africa/Accra", [
		["1936-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1936-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1936-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1936-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	]),

	"1937" : helpers.makeTestYear("Africa/Accra", [
		["1937-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1937-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1937-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1937-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	]),

	"1938" : helpers.makeTestYear("Africa/Accra", [
		["1938-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1938-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1938-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1938-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	]),

	"1939" : helpers.makeTestYear("Africa/Accra", [
		["1939-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1939-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1939-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1939-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	]),

	"1940" : helpers.makeTestYear("Africa/Accra", [
		["1940-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1940-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1940-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1940-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	]),

	"1941" : helpers.makeTestYear("Africa/Accra", [
		["1941-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1941-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1941-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1941-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	]),

	"1942" : helpers.makeTestYear("Africa/Accra", [
		["1942-08-31T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1942-09-01T00:00:00+00:00", "00:20:00", "GHST", -20],
		["1942-12-30T23:39:59+00:00", "23:59:59", "GHST", -20],
		["1942-12-30T23:40:00+00:00", "23:40:00", "GMT", 0]
	])
};